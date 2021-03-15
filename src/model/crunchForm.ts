import { Dictionary, ValidationResult, Validator, CrunchFormValue } from './shared';

export interface CrunchFormAction {
  type: string;
  payload?: Dictionary<any>;
}

export type CrunchFormReducer = (state: CrunchFormFieldState, action: CrunchFormAction) => CrunchFormFieldState;

export interface CrunchFormFieldState {
  validators: Dictionary<Validator[]>;
  validationResults: Dictionary<ValidationResult>;
  values: Dictionary<CrunchFormValue>;
}

export interface CrunchFormContextState {
  fields: CrunchFormFieldState;
  getValue: (fieldKey: string) => CrunchFormValue;
  setValue: (fieldKey: string, value: CrunchFormValue) => void;
  setValidators: (fieldKey: string, validators: Validator[] | Validator) => void;
  validate: (fieldKey: string) => void;
  getValidationResults: (fieldKey: string) => ValidationResult;
}
