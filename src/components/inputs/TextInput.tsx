import React, { useContext } from 'react'
import CrunchFormContext from '../../contexts/CrunchFormContext'
interface Props {
  className?: string
  textarea?: boolean
  field: string
}

const TextInput = (props: Props) => {
  const { className, textarea, field } = props
  const { getValue, setValue, validate } = useContext(CrunchFormContext)

  return (
    <input
      className={className}
      type={textarea ? 'textarea' : 'text'}
      value={(getValue(field) as string) || ''}
      onChange={(e) => setValue(field, e.target.value)}
      onBlur={() => validate && validate(field)}
    />
  )
}

export default TextInput
