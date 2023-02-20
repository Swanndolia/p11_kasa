import { Routes, Route } from "react-router-dom";

import Header from "../layouts/header.js";
import Footer from "../layouts/footer.js";

import Home from "./home.js";
import About from "./about.js";
import Error404 from "./error404.js";
import Accomodation from "./accomodation.js";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><Header /><Footer/></>}>
                <Route index element={<Home />} />
                <Route path="accomodation/:accomodatioId" element={<Accomodation />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
};

export default Router;
