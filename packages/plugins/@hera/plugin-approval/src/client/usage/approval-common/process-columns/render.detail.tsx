import { DatePicker, InputReadPretty, RecordProvider, useCurrentUserContext } from '@nocobase/client';
import React, { useContext } from 'react';
import { ContextWithActionEnabled } from '../Pd.WithActionEnabled';
import { ViewActionLaunch } from '../../approval-block/launch/VC.ViewActionLaunch';
import { ViewActionTodos } from '../../approval-block/todos/VC.ViewActionTodos';

// Component开头的是,不知道起什么名字合适的
export function renderColumnDetail(e, props, exist) {
  return exist ? <ColumnDetailExist {...props} /> : <ColumnDetailNotExist {...props} />;
}

// Exist
const ColumnDetailExist = (props) => {
  const { data } = useCurrentUserContext();
  const { actionEnabled } = useContext(ContextWithActionEnabled);
  return (
    <>
      {props.status ? (
        <>
          {[
            props.comment ? <InputReadPretty.TextArea value={props.comment} /> : null,
            <time key="time">{<DatePicker.ReadPretty value={props.updatedAt} showTime={true} />}</time>,
          ]}
        </>
      ) : null}
      {actionEnabled && props.userId === data?.data.id ? (
        // @ts-ignore
        <RecordProvider record={props} parent={false}>
          <ViewActionTodos />
        </RecordProvider>
      ) : null}
    </>
  );
};

// Not Exist
const ColumnDetailNotExist = (props) => {
  const { data } = useCurrentUserContext();
  const { actionEnabled } = useContext(ContextWithActionEnabled);
  return (
    <>
      <time key={'time'}>{<DatePicker.ReadPretty value={props.updatedAt} showTime={true} />}</time>
      {actionEnabled && props.user.id === data?.data.id ? (
        // @ts-ignore
        <RecordProvider record={props.execution} parent={false}>
          <ViewActionLaunch />
        </RecordProvider>
      ) : null}
    </>
  );
};