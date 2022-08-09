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
    <div className="container pt-5 mx-auto mt-5 h-100">
      {select.countriesReducer.length !== 1 ? (
        <div className="grid columns-1 text-center">Loading ...</div>
      ) : (
        <div className="grid md:grid-cols-2  content-center  gap-5 sm:grid-cols-1">
          <div>
            <img
              className="object-cover w-96"
              src={select.countriesReducer[0].flags.png}
              alt=""
            />
          </div>
          <div className="text-left grid grid-cols-1 items-center h-100">
            <p>
              <b>name :</b>{" "}
              <span className="text-gray-500">
                {select.countriesReducer[0].name}
              </span>
            </p>
            {/*  */}
            <p>
              <b>capital :</b>{" "}
              <span className="text-gray-500">
                {select.countriesReducer[0].capital}
              </span>
            </p>
            {/*  */}
            <p>
              <b>population :</b>{" "}
              <span className="text-gray-500">
                {select.countriesReducer[0].population}
              </span>
            </p>
            {/*  */}
            <p>
              <b>region :</b>{" "}
              <span className="text-gray-500">
                {select.countriesReducer[0].region}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
