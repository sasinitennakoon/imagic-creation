import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    enabled: true,
  },
  cloud: {
    enabled: env.bool('STRAPI_PLUGIN_CLOUD_ENABLED', false),
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dwz8zdbi3"),
        api_key: env("665297154625536"),
        api_secret: env("GRRvt4O11woh_y4hkd3dLpAUjaQ"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});

console.log('=== CLOUDINARY ENV CHECK ===');
console.log('CLOUDINARY_NAME:', process.env.CLOUDINARY_NAME);
console.log('CLOUDINARY_KEY:', process.env.CLOUDINARY_KEY);
console.log('CLOUDINARY_SECRET exists:', !!process.env.CLOUDINARY_SECRET);
console.log('============================');

export default config;