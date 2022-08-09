import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCountries from "../components/CardCountries";
import Loading from "../components/Loading";
const Home = () => {
  let dispatch = useDispatch();
  let select = useSelector((state) => state);
  useEffect(() => {
    console.log(select);
    dispatch({ type: "FETCH_ALL_DATA" });
  }, []);
  return (
    <>
      <div className="md:container px-2 mx-auto">
        <div className="grid md:grid-cols-4 gap-5 sm:grid-cols-12">
          {select.countriesReducer.length < 2 ? (
            <Loading />
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
