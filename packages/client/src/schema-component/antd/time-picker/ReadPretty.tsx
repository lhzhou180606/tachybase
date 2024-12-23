import React from 'react';
import { usePrefixCls } from '@tachybase/components';
import { toArr } from '@tachybase/schema';

import { TimeRangePickerProps } from 'antd/es/time-picker';
import cls from 'classnames';
import dayjs from 'dayjs';

export const ReadPretty: React.FC<TimeRangePickerProps> = (props: any) => {
  const { value, format = 'HH:mm:ss' } = props;
  const prefixCls = usePrefixCls('description-text', props);
  const values = toArr(value);
  const getLabels = () => {
    const labels = values.map((v) => dayjs(v, 'HH:mm:ss').format(format));
    return labels.join('~');
  };
  return (
    <div className={cls(prefixCls, props.className)} style={props.style}>
      {getLabels()}
    </div>
  );
};
