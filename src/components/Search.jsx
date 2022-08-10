import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="col-span-1 mb-5">
      <input
        onChange={(e) => dispatch({ type: "SAGA_SEARCH_COUNTRY", peyload: e.target.value })}
        type="text"
        placeholder="Search Country"
        className="inputSearch"
      />
    </div>
  );
};

export default Search;
