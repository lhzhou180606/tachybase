import React from 'react';
import { SchemaComponentOptions } from '@tachybase/client';

import { MapBlock } from './MapBlock';
import { MapBlockDesigner } from './MapBlockDesigner';
import { MapBlockInitializer } from './MapBlockInitializer';
import { MapBlockProvider, useMapBlockProps } from './MapBlockProvider';

export const MapBlockOptions = (props) => {
  return (
    <SchemaComponentOptions
      scope={{ useMapBlockProps }}
      components={{ MapBlockInitializer, MapBlockDesigner, MapBlockProvider, MapBlock }}
    >
      {props.children}
    </SchemaComponentOptions>
  );
};
