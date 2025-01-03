import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { IResource } from '@tachybase/sdk';

import { useAPIClient } from '../../api-client';
import { useCollectionManager } from '../collection';
import { CollectionRecord } from '../collection-record';
import { useDataSourceHeaders } from '../utils';
import { useDataBlockProps } from './DataBlockProvider';

export const DataBlockResourceContext = createContext<IResource>(null);
DataBlockResourceContext.displayName = 'DataBlockResourceContext';

export const DataBlockResourceProvider = ({ children }: { children?: ReactNode }) => {
  const dataBlockProps = useDataBlockProps();
  const cm = useCollectionManager();
  const { association, collection, dataSource, sourceId, parentRecord } = dataBlockProps;
  const api = useAPIClient();
  const headers = useDataSourceHeaders(dataSource);
  const collectionName = useMemo(() => (typeof collection === 'string' ? collection : collection?.name), [collection]);

  const sourceIdValue = useMemo(() => {
    if (sourceId) {
      return sourceId;
    }
    if (association && parentRecord) {
      const sourceKey = cm.getSourceKeyByAssocation(association);
      const parentRecordData = parentRecord instanceof CollectionRecord ? parentRecord.data : parentRecord;
      return parentRecordData[sourceKey];
    }
  }, [association, sourceId, parentRecord]);

  const resource = useMemo(() => {
    if (association) {
      return api.resource(association, sourceIdValue, headers);
    }
    return api.resource(dataBlockProps.resource_deprecated ?? collectionName, undefined, headers);
  }, [api, association, collection, sourceIdValue, headers, dataBlockProps.resource_deprecated]);
  return <DataBlockResourceContext.Provider value={resource}>{children}</DataBlockResourceContext.Provider>;
};

export function useDataBlockResource() {
  const context = useContext(DataBlockResourceContext);

  if (!context) {
    throw new Error('useDataBlockResource() must be used within a DataBlockResourceProvider');
  }

  return context;
}
