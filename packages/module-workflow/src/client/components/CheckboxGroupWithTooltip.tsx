import React from 'react';
import { css, useCompile } from '@tachybase/client';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Space, Tooltip } from 'antd';

export interface CheckboxGroupWithTooltipOption {
  value: any;
  label: string;
  tooltip?: string;
}

export function CheckboxGroupWithTooltip(props) {
  const { options = [], direction, ...other } = props;
  const compile = useCompile();

  return (
    <Checkbox.Group {...other}>
      <Space direction={direction}>
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            <span
              className={css`
                & + .anticon {
                  margin-left: 0.25em;
                }
              `}
            >
              {compile(option.label)}
            </span>
            {option.tooltip && (
              <Tooltip title={compile(option.tooltip)}>
                <QuestionCircleOutlined style={{ color: '#666' }} />
              </Tooltip>
            )}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
}
