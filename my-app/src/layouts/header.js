import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/logo_header.svg"

import "../assets/css/header.css"

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="logo"></img>
                <nav>
                    <Link className="link-nounderline" to="/">Accueil</Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
};

export default Header;