import React from 'react';
import {
  SchemaInitializerItem,
  createReadPrettyFormBlockSchema,
  parseCollectionName,
  useRecordCollectionDataSourceItems,
  useSchemaInitializer,
  useSchemaInitializerItem,
  useSchemaTemplateManager,
} from '@nocobase/client';
import { useFlowContext } from '@nocobase/plugin-workflow/client';
import _ from 'lodash';

export const ApproverAddBlockComponent = () => {
  const { workflow } = useFlowContext();
  const [dataSourceName, collection] = parseCollectionName(workflow.config.collection);
  const itemConfig = useSchemaInitializerItem();
  const { insert } = useSchemaInitializer();
  const { getTemplateSchemaByMode } = useSchemaTemplateManager();
  const items = useRecordCollectionDataSourceItems('FormItem');

  const onClick = async ({ item }) => {
    const template = item.template ? await getTemplateSchemaByMode(item) : null;
    const targetSchema = createReadPrettyFormBlockSchema({
      actionInitializers: null,
      resource: collection,
      collection,
      dataSource: dataSourceName,
      template,
      settings: 'blockSettings:singleDataDetails',
    });

    delete targetSchema['x-acl-action-props'];
    delete targetSchema['x-acl-action'];

    const [firstPropertyKey] = Object.keys(targetSchema.properties);

    _.set(targetSchema.properties[firstPropertyKey], 'x-component-props.useProps', '{{useApprovalDetailBlockProps}}');

    insert(targetSchema);
  };
  return <SchemaInitializerItem {...itemConfig} onClick={onClick} items={items} />;
};