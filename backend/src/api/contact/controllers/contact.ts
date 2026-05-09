import nodemailer from "nodemailer";

const submissionMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  submissionMap.set(ip, [...timestamps, now]);
  return false;
}

export default {
  async send(ctx) {
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD);
    const ip =
      ctx.request.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ??
      ctx.request.ip ??
      "unknown";

    if (isRateLimited(ip)) {
      return ctx.throw(429, "Too many requests. Please try again later.");
    }

    const { name, email, phone, service, message, honeypot } = ctx.request.body;

    if (honeypot) {
      return ctx.send({ success: true });
    }

    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+\d\s\-().]{7,20}$/;

    if (!name?.trim() || name.trim().length < 2)
      errors.name = "Full name must be at least 2 characters.";
    if (!email?.trim() || !emailRegex.test(email.trim()))
      errors.email = "Please enter a valid email address.";
    if (!phone?.trim() || !phoneRegex.test(phone.trim()))
      errors.phone = "Please enter a valid phone number.";
    if (!service)
      errors.service = "Please select a service.";
    if (!message?.trim() || message.trim().length < 20)
      errors.message = "Project details must be at least 20 characters.";

    if (Object.keys(errors).length > 0) {
      return ctx.badRequest("Validation failed", { errors });
    }

    const transporter = nodemailer.createTransport({
  service: "gmail",   // ← replaces host/port config
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

    await transporter.sendMail({
      from: `"Imagic Creation" <${process.env.GMAIL_USER}>`,
to: process.env.GMAIL_USER,
      replyTo: email.trim(),
      subject: `New Enquiry: ${service} — ${name.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;background:#f9f9f9;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#C51BE2,#8A2BE2,#FF0CE3);padding:32px 24px;">
            <h1 style="color:#fff;margin:0;font-size:24px;">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Imagic Creation Website</p>
          </div>
          <div style="padding:32px 24px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;width:140px;font-size:13px;">Full Name</td><td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;">${name.trim()}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;">Email</td><td style="padding:12px 0;border-bottom:1px solid #eee;"><a href="mailto:${email.trim()}" style="color:#8A2BE2;">${email.trim()}</a></td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #eee;">${phone.trim()}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;">Service</td><td style="padding:12px 0;border-bottom:1px solid #eee;">${service}</td></tr>
              <tr><td style="padding:12px 0;color:#666;font-size:13px;vertical-align:top;">Details</td><td style="padding:12px 0;white-space:pre-wrap;">${message.trim()}</td></tr>
            </table>
          </div>
          <div style="background:#f0f0f0;padding:16px 24px;text-align:center;font-size:12px;color:#999;">
            Sent from imagiccreation.com · ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Colombo" })} (SL Time)
          </div>
        </div>
      `,
    });

    return ctx.send({ success: true });
  },
};