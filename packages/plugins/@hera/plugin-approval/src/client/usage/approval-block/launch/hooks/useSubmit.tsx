import { useAPIClient, useActionContext } from '@nocobase/client';
import { useFlowContext } from '@nocobase/plugin-workflow/client';
import { useField, useForm } from '@nocobase/schema';
import _ from 'lodash';
import { useApproval } from '../../../approval-common/Pd.ApprovalData';
import { useContextApprovalStatus } from '../Pd.ApplyActionStatus';

export function useSubmit() {
  const from = useForm();
  const field = useField();
  const { setVisible, setSubmitted } = useActionContext() as any;
  const { id } = useApproval();
  const { workflow } = useFlowContext();
  const contextApprovalStatus = useContextApprovalStatus();
  const apiClient = useAPIClient();

  const run = () => {
    return () => {
      try {
        from.submit();

        _.set(field, ['data', 'loading'], true);

        apiClient.resource('approvals').update({
          filterByTk: id,
          values: {
            collectionName: workflow.config.collection,
            data: from.values,
            status: contextApprovalStatus,
          },
        });
        setSubmitted(true);
        setVisible(false);
        from.reset();
        _.set(field, ['data', 'loading'], false);
      } catch (m) {
        _.set(field, ['data', 'loading'], false);
      }
    };
  };

  return {
    run,
  };
}