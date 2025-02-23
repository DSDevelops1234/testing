import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPath } from "./paths";
import Home from "../pages/Home";
import About from "../pages/About";
import LoanAgainstProperty from "../pages/LAP";
import GoldLoan from "../pages/GoldLoan";
import BusinessLoan from "../pages/BusinessLoan";

const Approuter = () => {
  return (
    <>
      <Routes>
        <Route path={getPath("homepage")} element={<Home />} />
        <Route path={getPath("aboutpage")} element={<About />} />
        <Route path={getPath("lappage")} element={<LoanAgainstProperty />} />
        <Route path={getPath("goldloanpage")} element={<GoldLoan />} />
        <Route path={getPath("businessloanpage")} element={<BusinessLoan />} />
      </Routes>
    </>
  );
};

export default Approuter;
