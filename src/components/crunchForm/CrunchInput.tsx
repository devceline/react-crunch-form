import React from "react";
import CrunchFormContext from "../contexts/CrunchFormContext";

interface Props {
  className?: string;
}

const CrunchForm = (props: Props) => {
  const { className } = props;

  return (
    <CrunchFormContext.Provider value={{}}>
      <form className={className}></form>
    </CrunchFormContext.Provider>
  );
};

export default CrunchForm;
