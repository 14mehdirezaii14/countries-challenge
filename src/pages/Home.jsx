import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCountries from "../components/CardCountries";
import Loading from "../components/Loading";
import Search from "../components/Search";
const Home = () => {
  let dispatch = useDispatch();
  let select = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_DATA" });
  }, []);
  return (
    <>
      <div className="md:container h-100 px-2 mx-auto">
        <Search />
        {select.countriesReducer.length >= 1 ? (
          select.countriesReducer[0].err ? (
            <div className="col-span-1 text-center">Not Found</div>
          ) : (
            <>
              <div className="grid md:grid-cols-4 h-100 gap-5 sm:grid-cols-12">
                {select.countriesReducer.map((country, index) => {
                  return <CardCountries country={country} key={index} />;
                })}
              </div>
            </>
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
