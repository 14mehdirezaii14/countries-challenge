import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardCountries from "../components/CardCountries";
const SingleCountry = () => {
  const path = useLocation();
  //   console.log(s.pathname.replace('/',''));
  let dispatch = useDispatch();
  let select = useSelector((state) => state);
  useEffect(() => {
    dispatch({
      type: "SAGA_GET_SINGLE_COUNTRY",
      peyload: path.pathname.replace("/", ""),
    });
    console.log(select);
    return () => {
      dispatch({ type: "EMPTY_LIST" });
    };
  }, []);

  useEffect(
    (res) => {
      console.log(select);
    },
    [select]
  );
  return ( 
    <div className="container mx-auto mt-5">
      {select.countriesReducer.length !== 1 ? (
        "Loading ..."
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div><img className="object-cover w-96" src={select.countriesReducer[0].flags.png} alt="" /></div>
            <div className="text-right">s</div>
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
