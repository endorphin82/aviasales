import React from "react";
import { useSelector } from "react-redux";
import { filtersGetter } from "../../../selectors";

const Transplantation = () => {
  const filters = useSelector(filtersGetter);

  return (
    <>
      Transplantation
      <ul>
        {filters && filters.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

    </>
  );
};

export default Transplantation;