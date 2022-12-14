import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCountries from "../components/CardCountries";
const Home = () => {
  let dispatch = useDispatch();
  let select = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_DATA" });
  }, []);
  useEffect(() => {
    // console;
  }, [select]);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-5 sm:grid-cols-12">
          {select.countriesReducer.length < 1 ? (
            <div className="col-span-12 text-center">loading ...</div>
          ) : (
            select.countriesReducer.map((country, index) => {
              return <CardCountries country={country} key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
