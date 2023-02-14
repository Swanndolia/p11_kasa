import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/about">A Propos</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;