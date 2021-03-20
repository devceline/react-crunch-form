import React, { useContext, useEffect } from 'react'
import TextInput from '../inputs/TextInput'
import { InputType } from '../../model/crunchInput'
import CrunchFormContext from '../../contexts/CrunchFormContext'
import { Dictionary, Validator } from '../../model/shared'
import SelectInput from '../inputs/SelectInput'

interface Props {
  field: string
  type?: InputType
  className?: string
  validators?: Validator[] | Validator
  lookupFields?: Dictionary<string | number>
  getLookupFieldsAsync?: () => Promise<Dictionary<string | number>>
}

const CrunchInput = (props: Props) => {
  const {
    field,
    getLookupFieldsAsync,
    lookupFields,
    validators,
    className,
    type = 'text'
  } = props

  const ctx = useContext(CrunchFormContext)

  useEffect(() => {
    if (validators) ctx.setValidators(field, validators)
  }, [])

  const getInput = () => {
    switch (type) {
      case 'textarea':
      case 'text':
        return (
          <TextInput
            field={field}
            textarea={type === 'textarea'}
            className={className}
          />
        )
      case 'select':
        return (
          <SelectInput
            field={field}
            className={className}
            getLookupFieldsAsync={getLookupFieldsAsync}
            lookupFields={lookupFields}
          />
        )
      default:
        return <input></input>
    }
  }

  return getInput()
}

export default CrunchInput
