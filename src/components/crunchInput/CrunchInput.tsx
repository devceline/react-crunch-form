import React, { useContext, useEffect } from 'react'
import TextInput from '../inputs/TextInput'
import { InputType } from '../model/crunchInput'
import CrunchFormContext from '../contexts/CrunchFormContext'
import { Validator } from '../model/shared'

interface Props {
  field: string
  type?: InputType
  className?: string
  validators?: Validator[] | Validator
}

const CrunchInput = (props: Props) => {
  const { field, validators, type = 'text' } = props

  const ctx = useContext(CrunchFormContext)

  useEffect(() => {
    if (validators) ctx.setValidators(field, validators)
  }, [])

  const getInput = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            onBlur={() => ctx.validate(field)}
            value={(ctx.getValue(field) as string) || ''}
            onChange={(v) => ctx.setValue(field, v)}
          />
        )
      default:
        return <input></input>
    }
  }

  return getInput()
}

export default CrunchInput
