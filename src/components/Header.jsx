import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSunPlantWilt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [iconTheme, setIconTheme] = useState(faSun);
  return (
    <>
      <header className="shadow-lg shadow-slate-200 dark:shadow-slate-800 mb-5">
        <div className="container px-4 mx-auto py-4">
          <div className="grid grid-cols-1">
            <div>
              <Link to='/'>Where In The World</Link>
              <button
                className="float-right"
                onClick={() => {
                  theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
              >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon}  />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
