import React, { useEffect } from 'react';
import { useCollectionRecord, Variable } from '@tachybase/client';

import { useContextRequestInfo } from '../../contexts/RequestForm.context';
import { useVariableOptions } from '../../scopes/useVariableOptions';
import { setFormValue } from '../../utils/setFormValue';
import { responseTransformerAe } from '../../utils/responseTransformerAe';

export const ResponseTransformerComponent = () => {
  const { form, actionKey, responseTransformer, setResponseTransformer } = useContextRequestInfo();
  const transformer = form?.values?.actions?.[actionKey]?.responseTransformer;
  const transformerValue = responseTransformer ?? transformer;
  const { data } = useCollectionRecord() as any;

  useEffect(() => {
    if (!data?.actions?.[actionKey]?.responseTransformer && !transformer) {
      const { actions } = form.values || {};
      form.setValuesIn('actions', {
        ...actions,
        [actionKey]: {
          ...actions?.[actionKey],
          responseTransformer: responseTransformerAe,
        },
      });
    }
  }, []);

  return (
    <Variable.JSON
      value={transformerValue}
      onChange={(value) => {
        setResponseTransformer(value);
        setFormValue(form, actionKey, value);
      }}
      autoSize={{
        minRows: 5,
      }}
      fieldNames={{
        value: 'name',
        label: 'title',
      }}
      scope={() => useVariableOptions(true)}
    />
  );
};
