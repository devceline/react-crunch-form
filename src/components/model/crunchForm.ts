import {
  Dictionary,
  ValidationResult,
  Validator,
  CrunchFormValue,
} from "./shared";

export interface CrunchFormContext {
  validators: Dictionary<Validator[]>;
  validationResults: Dictionary<ValidationResult>;
  values: Dictionary<CrunchFormValue>;
  getValue: (fieldKey: string) => CrunchFormValue;
  setValue: (fieldKey: string, value: CrunchFormValue) => void;
  setValidators: (validators: Validator[] | Validator) => void;
  validate: (fieldKey: string) => void;
  getValidationErrors: (fieldKey: string) => ValidationResult;
}
