import React from 'react';
import { Field, observer, useField } from '@tachybase/schema';

import { useTranslation } from '../../../locale';

export const ColumnWorkflow = observer(
  () => {
    const { t } = useTranslation();
    const { value } = useField<Field>();
    const title = value?.title || `#${value?.id}`;

    if (value?.enabled) {
      return title;
    } else {
      return <span title={t('Disabled')}>{`${title}*`}</span>;
    }
  },
  { displayName: 'ColumnWorkflow' },
);
