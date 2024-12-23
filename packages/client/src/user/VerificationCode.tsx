import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '@tachybase/schema';

import { App, Button, Input } from 'antd';
import { createStyles } from 'antd-style';
import { useTranslation } from 'react-i18next';

import { useAPIClient } from '../api-client';

const useStyles = createStyles(({ css }) => {
  return {
    field: css`
      display: flex;
      gap: 0.5em;
    `,
  };
});

export default function VerificationCode({ targetFieldName = 'phone', actionType, value, onChange }) {
  const { message } = App.useApp();
  const { t } = useTranslation();
  const { styles } = useStyles();
  const api = useAPIClient();
  const form = useForm();

  const [count, setCountdown] = useState<number>(0);
  const timer = useRef(null);

  useEffect(() => {
    if (count <= 0 && timer.current) {
      clearInterval(timer.current);
    }
  }, [count]);

  async function onGetCode() {
    if (count > 0) {
      return;
    }
    try {
      const {
        data: { data },
      } = await api.resource('verifications').create({
        values: {
          type: actionType,
          phone: form.values[targetFieldName],
        },
      });
      message.success(t('Operation succeeded'));
      if (value) {
        onChange('');
      }
      const expiresIn = data.expiresAt ? Math.ceil((Date.parse(data.expiresAt) - Date.now()) / 1000) : 60;
      setCountdown(expiresIn);
      timer.current = setInterval(() => {
        setCountdown((count) => count - 1);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <fieldset className={styles.field}>
      <Input value={value} onChange={onChange} placeholder={t('Verification code')} />
      <Button onClick={onGetCode} disabled={count > 0}>
        {count > 0 ? t('Retry after {{count}} seconds', { count }) : t('Send code')}
      </Button>
    </fieldset>
  );
}
