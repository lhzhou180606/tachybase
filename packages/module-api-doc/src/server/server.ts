import { Context } from '@tachybase/actions';
import { Plugin } from '@tachybase/server';

import { SwaggerManager } from './swagger';

export class PluginAPIDocServer extends Plugin {
  swagger: SwaggerManager;
  constructor(app, options) {
    super(app, options);
    this.swagger = new SwaggerManager(this);
  }
  async beforeLoad() {}
  async load() {
    this.app.resourcer.define({
      name: 'swagger',
      type: 'single',
      actions: {
        getUrls: async (ctx: Context, next) => {
          // ctx.withoutDataWrapping = true;
          ctx.body = await this.swagger.getUrls();
          await next();
        },
        get: async (ctx: Context, next) => {
          ctx.withoutDataWrapping = true;
          const { ns } = ctx.action.params;
          if (!ns) {
            ctx.body = await this.swagger.getSwagger();
            return;
          }
          const [type, index] = ns.split('/');
          if (type === 'core') {
            ctx.body = await this.swagger.getCoreSwagger();
          } else if (type === 'plugins') {
            ctx.body = await this.swagger.getPluginsSwagger(index);
          } else if (type === 'collections') {
            ctx.body = await this.swagger.getCollectionsSwagger(index);
          }
          await next();
        },
      },
      only: ['get', 'getUrls'],
    });
    this.app.acl.allow('swagger', ['get', 'getUrls'], 'loggedIn');
    this.app.acl.registerSnippet({
      name: ['pm', this.name, 'documentation'].join('.'),
      actions: ['swagger:*'],
    });
  }
}

export default PluginAPIDocServer;
