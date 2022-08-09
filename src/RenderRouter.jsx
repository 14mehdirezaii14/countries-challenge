import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SingleCountry from "./pages/SingleCountry";
const RenderRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:country" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRouter;
