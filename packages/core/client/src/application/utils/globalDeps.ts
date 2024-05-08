import * as antdCssinjs from '@ant-design/cssinjs';
import * as antdIcons from '@ant-design/icons';
import * as dndKitAccessibility from '@dnd-kit/accessibility';
import * as dndKitCore from '@dnd-kit/core';
import * as dndKitModifiers from '@dnd-kit/modifiers';
import * as dndKitSortable from '@dnd-kit/sortable';
import * as dndKitUtilities from '@dnd-kit/utilities';
import * as emotionCss from '@emotion/css';
import * as formilyCore from '@tachybase/schema';
import * as formilyJsonSchema from '@tachybase/schema';
import * as formilyPath from '@tachybase/schema';
import * as formilyReact from '@tachybase/schema';
import * as formilyJsonReactive from '@tachybase/schema';
import * as formilyReactiveReact from '@tachybase/schema';
import * as formilyShared from '@tachybase/schema';
import * as formilyValidator from '@tachybase/schema';
import * as nocobaseEvaluators from '@tachybase/evaluators/client';
import * as nocobaseClientUtils from '@tachybase/utils/client';
import * as nocobaseSDK from '@tachybase/sdk';
import * as nocobaseSchema from '@tachybase/schema';
import * as nocobaseComponents from '@tachybase/components';
import { dayjs } from '@tachybase/utils/client';
import * as ahooks from 'ahooks';
import * as antd from 'antd';
import * as antdStyle from 'antd-style';
import axios from 'axios';
import * as i18next from 'i18next';
import lodash from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import * as reactI18next from 'react-i18next';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';
import jsxRuntime from 'react/jsx-runtime';
import * as nocobaseClient from '../../index';

import type { RequireJS } from './requirejs';

/**
 * @internal
 */
export function defineGlobalDeps(requirejs: RequireJS) {
  // react
  requirejs.define('react', () => React);
  requirejs.define('react-dom', () => ReactDOM);
  requirejs.define('react/jsx-runtime', () => jsxRuntime);

  // react-router
  requirejs.define('react-router', () => ReactRouter);
  requirejs.define('react-router-dom', () => ReactRouterDom);

  // antd
  requirejs.define('antd', () => antd);
  requirejs.define('antd-style', () => antdStyle);
  requirejs.define('@ant-design/icons', () => antdIcons);
  requirejs.define('@ant-design/cssinjs', () => antdCssinjs);

  // i18next
  requirejs.define('i18next', () => i18next);
  requirejs.define('react-i18next', () => reactI18next);

  // formily
  requirejs.define('@formily/core', () => formilyCore);
  requirejs.define('@formily/react', () => formilyReact);
  requirejs.define('@formily/shared', () => formilyShared);
  requirejs.define('@formily/json-schema', () => formilyJsonSchema);
  requirejs.define('@formily/reactive', () => formilyJsonReactive);
  requirejs.define('@formily/path', () => formilyPath);
  requirejs.define('@formily/validator', () => formilyValidator);
  requirejs.define('@formily/reactive-react', () => formilyReactiveReact);

  // nocobase
  requirejs.define('@tachybase/utils', () => nocobaseClientUtils);
  requirejs.define('@tachybase/utils/client', () => nocobaseClientUtils);
  requirejs.define('@tachybase/client', () => nocobaseClient);
  requirejs.define('@tachybase/client/client', () => nocobaseClient);
  requirejs.define('@tachybase/evaluators', () => nocobaseEvaluators);
  requirejs.define('@tachybase/evaluators/client', () => nocobaseEvaluators);
  requirejs.define('@tachybase/sdk', () => nocobaseSDK);
  requirejs.define('@tachybase/schema', () => nocobaseSchema);
  requirejs.define('@tachybase/components', () => nocobaseComponents);

  // dnd-kit 相关
  requirejs.define('@dnd-kit/accessibility', () => dndKitAccessibility);
  requirejs.define('@dnd-kit/core', () => dndKitCore);
  requirejs.define('@dnd-kit/modifiers', () => dndKitModifiers);
  requirejs.define('@dnd-kit/sortable', () => dndKitSortable);
  requirejs.define('@dnd-kit/utilities', () => dndKitUtilities);

  // utils
  requirejs.define('axios', () => axios);
  requirejs.define('dayjs', () => dayjs);
  requirejs.define('lodash', () => lodash);
  requirejs.define('ahooks', () => ahooks);
  requirejs.define('@emotion/css', () => emotionCss);
  requirejs.define('dayjs', () => dayjs);
}
