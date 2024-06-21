import React, { useContext } from 'react';
import { EllipsisWithTooltip } from '@tachybase/client';
import { useField } from '@tachybase/schema';

import { DepartmentsContext } from '../context/DepartmentsContext';
import { getDepartmentStr } from '../utils/getDepartmentStr';

export const DepartmentField = () => {
  const { setDepartment } = useContext(DepartmentsContext);
  const field = useField<{ value: Array<any> }>();
  const fieldValues = field.value || [];

  const department = fieldValues.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  return (
    <EllipsisWithTooltip ellipsis={true}>
      {fieldValues.map((currFieldValue, index) => (
        <span key={index}>
          <a
            onClick={(event) => {
              event.preventDefault();
              setDepartment(department[currFieldValue.id]);
            }}
          >
            {getDepartmentStr(currFieldValue)}
          </a>
          {index !== fieldValues.length - 1 ? <span style={{ marginRight: 4, color: '#aaa' }}>,</span> : ''}
        </span>
      ))}
    </EllipsisWithTooltip>
  );
};