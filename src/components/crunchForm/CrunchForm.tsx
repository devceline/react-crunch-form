import React, { useReducer } from "react";
import CrunchFormContext from "../contexts/CrunchFormContext";
import {
  SetValidationResults,
  SetValidators,
  SetValue,
} from "../model/actions";
import {
  SET_VALIDATION_RESULTS,
  SET_FIELD_VALUE,
  SET_VALIDATORS,
} from "../model/actionTypes";
import { CrunchFormFieldState, CrunchFormReducer } from "../model/crunchForm";
import {
  CrunchFormValue,
  Dictionary,
  ValidationResult,
  Validator,
} from "../model/shared";
import reducer from "./reducer";

interface Props {
  className?: string;
  onSubmit?: (body: Dictionary<CrunchFormValue>) => void;
}

const CrunchForm = (props: Props) => {
  const { className, onSubmit } = props;

  const [fields, dispatch] = useReducer(reducer, {} as CrunchFormFieldState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(fields.values);
    }
  };

  const getValidationResults = (fieldKey: string) => {
    return fields.validationResults[fieldKey];
  };

  const getValue = (fieldKey: string) => {
    return fields.values[fieldKey];
  };

  const validate = (fieldKey: string) => {
    const validators = fields.validators[fieldKey];
    const errors: ValidationResult[] = [];
    for (let validator of validators) {
      const res = validator(getValue(fieldKey));
      if (res) errors.push(res);
    }
    SetValidationResults(errors, dispatch);
  };

  const setValidators = (
    fieldKey: string,
    validators: Validator | Validator[]
  ) => {
    if (!Array.isArray(validators)) {
      validators = [validators];
    }

    SetValidators(fieldKey, validators, dispatch);
  };

  const setValue = (fieldKey: string, value: CrunchFormValue) => {
    SetValue(fieldKey, value, dispatch);
  };

  return (
    <CrunchFormContext.Provider
      value={{
        fields,
        getValidationResults,
        getValue,
        validate,
        setValidators,
        setValue,
      }}
    >
      <form onSubmit={handleSubmit} className={className}></form>
    </CrunchFormContext.Provider>
  );
};

export default CrunchForm;
