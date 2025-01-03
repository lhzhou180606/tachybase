import { useAPIClient, useCollectionRecordData, useDataBlockRequest } from '@tachybase/client';

export function usePropsCheckLink(props) {
  const { onClick } = props;
  const apiClient = useAPIClient();
  const { refresh } = useDataBlockRequest();
  const record = useCollectionRecordData();
  const { id: messageId, read } = record;

  // 点击查看时候, 同步刷新阅读状态, 和全局消息阅读量的逻辑
  const handleClick = async () => {
    onClick?.();
    if (messageId && !read) {
      await apiClient.resource('messages').update({
        filter: {
          id: messageId,
        },
        values: {
          read: true,
        },
      });

      // 刷新当前表格
      refresh();
    }
  };

  return {
    ...props,
    onClick: handleClick,
  };
}
