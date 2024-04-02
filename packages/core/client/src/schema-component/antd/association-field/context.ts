import { GeneralField } from '@nocobase/schema';
import { createContext } from 'react';

export interface AssociationFieldContextProps {
  options?: any;
  field?: GeneralField;
  currentMode?: string;
  allowMultiple?: boolean;
  allowDissociate?: boolean;
}

export const AssociationFieldContext = createContext<AssociationFieldContextProps>({});
AssociationFieldContext.displayName = 'AssociationFieldContext';
