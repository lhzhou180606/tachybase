import React, { useState } from 'react';
import { useTranslation } from '../../../../locale';
import { Grid, Divider, Picker, Input, Space } from 'antd-mobile';
import { DownOutline } from 'antd-mobile-icons';

export const ISelect = (props) => {
  const { options, onChange, customLabelKey } = props;
  const [visible, setVisible] = useState(false);
  return options.length > 1 ? (
    <Grid.Item
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      onClick={() => {
        setVisible(true);
      }}
    >
      <span style={{ textAlign: 'center', width: '100%' }}>
        {options.find((option) => option.value === customLabelKey).label}
      </span>
      <DownOutline />
      <Picker
        columns={[options]}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        defaultValue={customLabelKey}
        onConfirm={(v) => {
          onChange(v[0]);
        }}
      />
      <Divider direction="vertical" style={{ height: '70%', margin: '0 0 0 5px' }} />
    </Grid.Item>
  ) : null;
};

export const IInput = (props) => {
  const { options, value, onChange } = props;
  const { t } = useTranslation();
  return (
    <Grid.Item span={options.length > 1 ? 2 : 3}>
      <Input
        placeholder={t('Please enter search content')}
        value={value}
        onChange={onChange}
        style={{ '--font-size': '12px', marginLeft: '5px' }}
      />
    </Grid.Item>
  );
};

export const IButton = (props) => {
  const { onClick } = props;
  const { t } = useTranslation();

  return (
    <Grid.Item onClick={onClick} style={{ color: '#2c6eff', textAlign: 'center', cursor: 'pointer' }}>
      {t('Search')}
    </Grid.Item>
  );
};