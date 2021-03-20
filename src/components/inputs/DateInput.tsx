import React, { useContext, useEffect } from 'react';
import CrunchFormContext from '../../contexts/CrunchFormContext';

interface Props {
  className?: string;
  field: string;
}

const DateInput = (props: Props) => {
  const { className, field } = props;
  const { getValue, setValue } = useContext(CrunchFormContext);

  useEffect(() => {
    setValue(field, new Date().toISOString().split('T')[0]);
  }, []);

  return (
    <input
      className={className}
      value={(getValue(field) as string) || ''}
      onChange={(e) => setValue(field, e.target.value)}
      type='date'
    />
  );
};

export default DateInput;
