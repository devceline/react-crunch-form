import React, { useContext, useEffect, useState } from 'react';
import CrunchFormContext from '../../contexts/CrunchFormContext';
import { Dictionary } from '../../model/shared';

interface Props {
  lookupFields?: Dictionary<string | number>;
  getLookupFieldsAsync?: () => Promise<Dictionary<string | number>>;
  className?: string;
  field: string;
}

const SelectInput = (props: Props) => {
  const { lookupFields, getLookupFieldsAsync, field, className } = props;

  const [fields, setFields] = useState(lookupFields || []);

  useEffect(() => {
    if (!getLookupFieldsAsync) return;

    getLookupFieldsAsync().then((v) => {
      setFields(v);
    });
  }, [getLookupFieldsAsync]);

  useEffect(() => {
    const firstEntry = Object.entries(fields)[0];
    setValue(field, firstEntry ? firstEntry[1] : '');
  }, [fields]);

  const { getValue, setValue } = useContext(CrunchFormContext);

  return (
    <select
      className={className}
      value={getValue(field) as string}
      onChange={(e) => setValue(field, e.target.value)}
    >
      {Object.entries(fields).map(([key, value]) => {
        return (
          <option key={key} value={value}>
            {key}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
