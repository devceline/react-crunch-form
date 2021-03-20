import React from 'react';

interface Props {
  children?: string | JSX.Element;
}

const CrunchSubmit = (props: Props) => {
  const { children } = props;

  return <button type='submit'>{children}</button>;
};

export default CrunchSubmit;
