import { Link } from "react-router-dom";

const CardCountries = (props) => {
    console.log(props)
  return (
    <Link to={`${props.country.name}`} className="">
      <div className="card border  border-slate-200 dark:border-gray-800 dark:shadow-slate-800 shadow-md shadow-slate-300">
        <img
          src={props.country.flags.png}
          className="rounded-md max-h-28 min-w-full"
          alt=""
        />
        <div className="px-2 my-3">
          <p className="text-lg">{props.country.name}</p>
          <p className="text-gray-400 text-sm">
            population : {props.country.population}
          </p>
          <p className="text-gray-400 text-sm">region : {props.country.region}</p>
          <p className="text-gray-400 text-sm">capital : {props.country.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCountries;
