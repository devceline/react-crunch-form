import React from 'react';
import { SET_FIELD_VALUE, SET_VALIDATION_RESULTS, SET_VALIDATORS } from './actionTypes';
import { CrunchFormAction } from './crunchForm';
import { CrunchFormValue, ValidationResult, Validator } from './shared';

export const SetValidationResults = (
  validationResults: ValidationResult[],
  dispatch: React.Dispatch<CrunchFormAction>,
) => {
  dispatch({
    type: SET_VALIDATION_RESULTS,
    payload: {
      validationResults,
    },
  });
};

export const SetValue = (fieldKey: string, value: CrunchFormValue, dispatch: React.Dispatch<CrunchFormAction>) => {
  dispatch({
    type: SET_FIELD_VALUE,
    payload: {
      fieldKey,
      value,
    },
  });
};

export const SetValidators = (
  fieldKey: string,
  validators: Validator[],
  dispatch: React.Dispatch<CrunchFormAction>,
) => {
  dispatch({
    type: SET_VALIDATORS,
    payload: {
      fieldKey,
      validators,
    },
  });
};
