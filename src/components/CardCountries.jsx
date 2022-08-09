import { Link } from "react-router-dom";

const CardCountries = ({country}) => {
  return (
    <Link to={`${country.name}`} className="">
      <div className="card border  border-slate-200 dark:border-gray-800 dark:shadow-slate-800 shadow-md shadow-slate-300">
        <img
          src={country.flags.png}
          className="rounded-md max-h-28 min-w-full"
          alt=""
        />
        <div className="px-2 my-3">
          <p className="text-lg">{country.name}</p>
          <p className="text-gray-400 text-sm">
            population : {country.population}
          </p>
          <p className="text-gray-400 text-sm">region : {country.region}</p>
          <p className="text-gray-400 text-sm">capital : {country.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCountries;
