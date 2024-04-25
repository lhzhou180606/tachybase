import { i18n, tval as nTval } from '@nocobase/client';

export const NAMESPACE = '@hera/plugin-approval';

export function usePluginTranslation(): any {
  return useTranslation();
}

export function useTranslation() {
  const t = (key: string, options = {}) => i18n.t(key, { ns: NAMESPACE, ...options });
  return { t };
}
export function lang(key: string, options = {}) {
  return i18n.t(key, {
    ...options,
    ns: NAMESPACE,
  });
}

export const tval = (key: string) => nTval(key, { ns: NAMESPACE });