import logo from "../assets/images/logo_footer.svg"

import "../assets/css/footer.css"

const Footer = () => {
    return (
            <footer>
                <img src={logo} alt="logo"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
    )
};

export default Footer;