import React from 'react'

interface Props {
  value: string
  onChange: (val: string) => void
  onBlur?: () => void
  className?: string
  textarea?: boolean
}

const TextInput = (props: Props) => {
  const { value, onChange, onBlur, className, textarea } = props

  return (
    <input
      className={className}
      type={textarea ? 'textarea' : 'text'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => onBlur && onBlur()}
    />
  )
}

export default TextInput
