export type Dictionary<T> = { [k: string]: T };

export type ValidationResult = string | false;
export type Validator = (value: any) => ValidationResult;

export type CrunchFormValue = string | number | Date | { [k: string]: CrunchFormValue };
