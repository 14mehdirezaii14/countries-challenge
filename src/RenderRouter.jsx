import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import SingleCountry from "./pages/SingleCountry";
import React, { Suspense } from "react";
const Loading = React.lazy(() => import("./components/Loading"));
const Home = React.lazy(() => import("./pages/Home"));
const Header = React.lazy(() => import("./components/Header"));
const SingleCountry = React.lazy(() => import("./pages/SingleCountry"));
const RenderRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:country" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RenderRouter;
