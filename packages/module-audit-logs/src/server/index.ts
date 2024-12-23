import path from 'path';
import { Plugin } from '@tachybase/server';

import { afterCreate, afterDestroy, afterUpdate } from './hooks';

export default class PluginActionLogs extends Plugin {
  async beforeLoad() {
    this.db.on('afterCreate', afterCreate);
    this.db.on('afterUpdate', afterUpdate);
    this.db.on('afterDestroy', afterDestroy);
  }

  async load() {
    await this.importCollections(path.resolve(__dirname, 'collections'));

    this.db.addMigrations({
      namespace: 'audit-logs',
      directory: path.resolve(__dirname, './migrations'),
      context: {
        plugin: this,
      },
    });
  }
}
