import React from 'react';
import { SchemaComponentContext, useSchemaComponentContext } from '@tachybase/client';

import { ViewDepartmentManagement } from './DepartmentManagement.view';
import { ProviderDepartmentIndex } from './DepartmentIndex.provider';

// TODO: 名称有待重新确认
export const DepartmentIndex = () => {
  const context = useSchemaComponentContext();
  return (
    <SchemaComponentContext.Provider value={{ ...context, designable: false }}>
      <ProviderDepartmentIndex>
        <ViewDepartmentManagement />
      </ProviderDepartmentIndex>
    </SchemaComponentContext.Provider>
  );
};