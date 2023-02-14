import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"

const Layout = () => {
  return (
    <>
      <nav>
            <img src={logo}></img>
            <Link to="/about">A Propos</Link>
            <Link to="/">Acceuil</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;