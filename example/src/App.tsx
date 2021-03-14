import React from 'react'

import CrunchForm, {
  CrunchInput,
  CrunchInputValidationDisplay
} from 'react-crunch-form'
import 'react-crunch-form/dist/index.css'

const App = () => {
  return (
    <CrunchForm onSubmit={(body) => console.log(body)}>
      <CrunchInput
        validators={[
          (v) => {
            if (v.length > 5) return 'TOO LONG'
            return false
          }
        ]}
        field='something'
        type='text'
      />
      <CrunchInputValidationDisplay field='something' />
    </CrunchForm>
  )
}

export default App
