import React, { useContext } from 'react'
import CrunchFormContext from '../../contexts/CrunchFormContext'

interface Props {
  field: string
  className?: string
}

const CrunchInputValidationDisplay = (props: Props) => {
  const { field, className } = props

  const ctx = useContext(CrunchFormContext)

  return <span className={className}>{ctx.getValidationResults(field)}</span>
}

export default CrunchInputValidationDisplay
