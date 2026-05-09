import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    enabled: true,
  },
  cloud: {
    enabled: env.bool('STRAPI_PLUGIN_CLOUD_ENABLED', false),
  },
});

export default config;
