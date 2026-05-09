export default {
  routes: [
    {
      method: "POST",
      path: "/contact",
      handler: "contact.send",
      config: {
        auth: false, // public endpoint — no token needed
      },
    },
  ],
};