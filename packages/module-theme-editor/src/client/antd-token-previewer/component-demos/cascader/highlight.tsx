import React from 'react';

import { Cascader as _Cascader } from 'antd';

import type { ComponentDemo } from '../../interface';
import options from './data';

const { _InternalPanelDoNotUseOrYouWillBeFired: Cascader } = _Cascader;

const Demo = () => {
  return <Cascader options={options} placeholder="Please select" searchValue={'jiang'} showSearch />;
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorHighlight'],
  key: 'highlight',
};

export default componentDemo;
