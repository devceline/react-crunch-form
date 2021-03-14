# React Crunch Form

> A library designed for you to crunch out a form really fast

[![NPM](https://img.shields.io/npm/v/react-crunch-form.svg)](https://www.npmjs.com/package/react-crunch-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-crunch-form
yarn install react-crunch-form
```

## Usage

```tsx
import React from 'react'

import CrunchForm, {
  CrunchInput,
  CrunchInputValidationDisplay
} from 'react-crunch-form'

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

```

## License

MIT © [shaheensarafa](https://github.com/shaheensarafa)
