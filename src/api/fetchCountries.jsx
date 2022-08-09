import axios from "axios";

export const fetchCountries = async (url) => {
  const res = await axios
    .get(
      url,
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
