import React from 'react';

import CrunchForm, {
  CrunchInput,
  CrunchInputValidationDisplay,
  CrunchSubmit
} from 'react-crunch-form';

const getLookup = () => {
  return new Promise<{ [k: string]: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        foo: 'bar',
        baz: 'bor'
      });
    }, 300);
  });
};

const App = () => {
  getLookup().then((v) => console.log({ v }));

  return (
    <CrunchForm className='main' onSubmit={(body) => console.log(body)}>
      <div>
        <CrunchInput
          validators={[
            (v) => {
              if (!v) return 'required';
              if (v.length > 5) return 'TOO LONG';
              return false;
            }
          ]}
          field='something'
          type='textarea'
        />
        <CrunchInputValidationDisplay
          className='validation-error'
          field='something'
        />
      </div>

      <div>
        <h6>Lookup coming from object</h6>
        <CrunchInput
          field='something2'
          type='select'
          lookupFields={{
            something: 2,
            somethingelse: 4
          }}
        />
      </div>

      <div>
        <h6>Lookup coming from a promise</h6>
        <CrunchInput
          field='something3'
          type='select'
          getLookupFieldsAsync={getLookup}
        />
      </div>

      <div>
        <h6>
          Native html date picker.
          <span style={{ color: 'red', margin: '0 1em' }}>
            Does not work on Safari or IE
          </span>
        </h6>
        <CrunchInput type='date' field='datefield' />
      </div>
      <div>
        <h6>
          Native html time picker.
          <span style={{ color: 'red', margin: '0 1em' }}>
            Does not work on Safari or IE
          </span>
        </h6>
        <CrunchInput type='time' field='timefield' />
      </div>
      <CrunchSubmit>Submit</CrunchSubmit>
    </CrunchForm>
  );
};

export default App;
