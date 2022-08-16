import { useDispatch } from "react-redux";
import { useMemo, useState } from "react";
const Search = () => {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  useMemo(() => {
    dispatch({ type: "SAGA_SEARCH_COUNTRY", peyload: valueInput });
  }, [valueInput]);
  return (
    <div className="col-span-1 mb-5">
      <input
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        type="text"
        placeholder="Search Country"
        className="inputSearch"
      />
    </div>
  );
};

export default Search;
