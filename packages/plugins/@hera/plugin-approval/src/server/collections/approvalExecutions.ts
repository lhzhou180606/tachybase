import { defineCollection } from '@nocobase/database';

export default defineCollection({
  namespace: 'workflow.approvalExecutions',
  duplicator: 'required',
  name: 'approvalExecutions',
  fields: [
    {
      type: 'bigInt',
      name: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    {
      type: 'belongsTo',
      name: 'approval',
      foreignKey: 'approvalId',
      primaryKey: false,
    },
    {
      type: 'belongsTo',
      name: 'execution',
      foreignKey: 'executionId',
      primaryKey: false,
    },
    {
      type: 'integer',
      name: 'status',
    },
    {
      type: 'jsonb',
      name: 'snapshot',
    },
    {
      type: 'hasMany',
      name: 'records',
      target: 'approvalRecords',
    },
  ],
});
