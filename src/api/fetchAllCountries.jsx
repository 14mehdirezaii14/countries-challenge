import axios from "axios";

export const fetchAllCountries = async () => {
  const res = await axios
    .get(
      "https://restcountries.com/v2/all",
      {
        access_key: "API_KEY",
      }
    )
    .then((res) => {
      return JSON.parse(JSON.stringify(res));
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
};
