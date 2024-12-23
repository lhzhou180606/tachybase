import React from 'react';
import {
  SchemaInitializerSwitch,
  useCurrentSchema,
  useSchemaInitializer,
  useSchemaInitializerItem,
} from '@tachybase/client';
import { merge } from '@tachybase/schema';

export const ImageSearchItemIntializer = () => {
  const itemConfig = useSchemaInitializerItem();
  const { insert } = useSchemaInitializer();
  const { schema: oldSchema, title } = itemConfig;
  const { exists, remove } = useCurrentSchema(oldSchema.name, 'name', itemConfig.find, itemConfig.remove);

  const onClick = () => {
    if (exists) {
      return remove();
    }
    const { schema: latestSchema } = itemConfig;

    const newSchema = merge(oldSchema || {}, latestSchema || {});
    // itemConfig?.schemaInitialize?.(newSchema);
    insert(newSchema);
  };

  return <SchemaInitializerSwitch checked={exists} title={title} onClick={onClick} />;
};
