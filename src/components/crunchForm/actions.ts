import React from 'react'
import {
  SET_FIELD_VALUE,
  SET_VALIDATION_RESULTS,
  SET_VALIDATORS
} from '../../model/actionTypes'
import { CrunchFormAction } from '../../model/crunchForm'
import {
  CrunchFormValue,
  ValidationResult,
  Validator
} from '../../model/shared'

export const SetValidationResults = (
  fieldKey: string,
  validationResults: ValidationResult[],
  dispatch: React.Dispatch<CrunchFormAction>
) => {
  dispatch({
    type: SET_VALIDATION_RESULTS,
    payload: {
      fieldKey,
      validationResults
    }
  })
}

export const SetValue = (
  fieldKey: string,
  value: CrunchFormValue,
  dispatch: React.Dispatch<CrunchFormAction>
) => {
  dispatch({
    type: SET_FIELD_VALUE,
    payload: {
      fieldKey,
      value
    }
  })
}

export const SetValidators = (
  fieldKey: string,
  validators: Validator[],
  dispatch: React.Dispatch<CrunchFormAction>
) => {
  dispatch({
    type: SET_VALIDATORS,
    payload: {
      fieldKey,
      validators
    }
  })
}
