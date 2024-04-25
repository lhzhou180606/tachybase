import React, { useEffect } from 'react';
import { useCurrentUserSettingsMenu } from '@nocobase/client';
import { usePluginVersion } from '../../hooks/usePluginVersion';
import { useTabSettings } from '../page-style/useTabSettings';

const useHeraVersion = () => {
  const version = usePluginVersion();
  return {
    key: 'hera-version',
    eventKey: 'hera-version',
    label: <span>赫拉系统 - {version}</span>,
  };
};

export const HeraVersionProvider = ({ children }) => {
  const { addMenuItem } = useCurrentUserSettingsMenu();
  const heraVersion = useHeraVersion();
  const tabItem = useTabSettings();
  useEffect(() => {
    addMenuItem(heraVersion, { before: 'divider_1' });
  }, [addMenuItem, tabItem, heraVersion]);

  return <>{children}</>;
};