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

export default config;