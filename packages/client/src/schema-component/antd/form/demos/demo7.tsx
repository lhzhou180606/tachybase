import React from 'react';
import { Action, Form, FormUseValues, SchemaComponent, SchemaComponentProvider, useRequest } from '@tachybase/client';
import { FormItem, Input } from '@tachybase/components';
import { ISchema, observer, useForm } from '@tachybase/schema';

import { Card } from 'antd';

const schema: ISchema = {
  type: 'object',
  properties: {
    form1: {
      type: 'void',
      'x-decorator': 'Form',
      'x-decorator-props': {
        useValues: '{{ useValues }}',
      },
      'x-component': 'Card',
      properties: {
        field1: {
          'x-component': 'Input',
          'x-decorator': 'FormItem',
          title: 'T1',
        },
        out: {
          'x-component': 'Output',
        },
        action1: {
          // type: 'void',
          'x-component': 'Action',
          title: 'Submit',
          'x-component-props': {
            useAction: '{{ useSubmit }}',
          },
        },
      },
    },
  },
};

const Output = observer(
  () => {
    const form = useForm();
    return <pre>{JSON.stringify(form.values, null, 2)}</pre>;
  },
  { displayName: 'Output' },
);

const useSubmit = () => {
  const form = useForm();
  return {
    async run() {
      console.log(form.values);
    },
  };
};

const useValues: FormUseValues = (opts) => {
  return useRequest(() => {
    return Promise.resolve({ data: { field1: 'aabb' } });
  }, opts);
};

export default observer(() => {
  return (
    <SchemaComponentProvider
      scope={{ useSubmit, useValues }}
      components={{ Card, Output, Action, Form, Input, FormItem }}
    >
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
});
