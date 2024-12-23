import React from 'react';
import { connect, mapProps, mapReadPretty } from '@tachybase/schema';

import { LoadingOutlined } from '@ant-design/icons';
import { Input as AntdInput, Spin } from 'antd';

import { useGlobalTheme } from '../../../style/theme';
import { ReadPretty as InputReadPretty } from '../input';
import { MarkdownVoid } from './Markdown.Void';
import { useStyles } from './style';
import { convertToText, useParseMarkdown } from './util';

export const Markdown: any = connect(
  AntdInput.TextArea,
  mapProps((props: any, field) => {
    return {
      autoSize: {
        maxRows: 10,
        minRows: 3,
      },
      ...props,
      suffix: <span>{field?.['loading'] || field?.['validating'] ? <LoadingOutlined /> : props.suffix}</span>,
    };
  }),
  mapReadPretty((props) => <MarkdownReadPretty {...props} />),
);

export const MarkdownReadPretty = (props) => {
  const { isDarkTheme } = useGlobalTheme();
  const { wrapSSR, hashId, componentCls: className } = useStyles({ isDarkTheme });
  const { html = '', loading } = useParseMarkdown(props.value);
  const text = convertToText(html);
  const value = (
    <div
      className={`${hashId} ${className} tb-markdown tb-markdown-default tb-markdown-table`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  if (loading) {
    return wrapSSR(<Spin />);
  }
  return wrapSSR(<InputReadPretty.TextArea {...props} autop={false} text={text} value={value} />);
};

Markdown.Void = MarkdownVoid;

export default Markdown;
