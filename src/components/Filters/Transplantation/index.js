import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersGetter } from "../../../selectors";
import { updateFilter } from "../../../AC";

const Transplantation = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filtersGetter);

  return (
    <>
      Transplantation
      <ul>
        {filters && filters.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button onClick={() => dispatch(updateFilter(0))}>Add/Delete 0 Transplantation</button>
      <button onClick={() => dispatch(updateFilter(1))}>Add/Delete 1 Transplantation</button>
      <button onClick={() => dispatch(updateFilter(2))}>Add/Delete 2 Transplantation</button>
      <button onClick={() => dispatch(updateFilter(3))}>Add/Delete 3 Transplantation</button>
    </>
  );
};

export default Transplantation;