import React, { useReducer } from 'react'
import CrunchFormContext from '../../contexts/CrunchFormContext'
import { SetValidationResults, SetValidators, SetValue } from './actions'
import { CrunchFormFieldState } from '../../model/crunchForm'
import {
  CrunchFormValue,
  Dictionary,
  ValidationResult,
  Validator
} from '../../model/shared'
import { getValue as getDeepValue } from '../../utils/deepValueManipulation'
import reducer from './reducer'

interface Props {
  className?: string
  onSubmit?: (body: Dictionary<CrunchFormValue>) => void
  children?: JSX.Element | JSX.Element[]
  style?: React.CSSProperties
}

const CrunchForm = (props: Props) => {
  const { className, onSubmit, style, children } = props

  const [fields, dispatch] = useReducer(reducer, {} as CrunchFormFieldState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(fields.values)
    }
  }

  const getValidationResults = (fieldKey: string) => {
    return getDeepValue(fields.validationResults, fieldKey)
  }

  const getValue = (fieldKey: string) => {
    return getDeepValue(fields.values, fieldKey)
  }

  const validate = (fieldKey: string) => {
    const validators = getDeepValue(fields.validators, fieldKey)
    if (!validators) return
    const errors: ValidationResult[] = []
    for (const validator of validators) {
      const res = validator(getValue(fieldKey))
      if (res) errors.push(res)
    }
    SetValidationResults(fieldKey, errors, dispatch)
  }

  const setValidators = (
    fieldKey: string,
    validators: Validator | Validator[]
  ) => {
    if (!Array.isArray(validators)) {
      validators = [validators]
    }

    SetValidators(fieldKey, validators, dispatch)
  }

  const setValue = (fieldKey: string, value: CrunchFormValue) => {
    SetValue(fieldKey, value, dispatch)
  }

  return (
    <CrunchFormContext.Provider
      value={{
        fields,
        getValidationResults,
        getValue,
        validate,
        setValidators,
        setValue
      }}
    >
      <form style={style} onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </CrunchFormContext.Provider>
  )
}

export default CrunchForm
