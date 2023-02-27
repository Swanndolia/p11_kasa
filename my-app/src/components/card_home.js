import { useNavigate } from "react-router-dom";

const CardsHome = ({ accomodation }) => {
    const navigate = useNavigate();
    return (
        <figure className="figure-home" onClick={() => navigate("/accomodation/" + accomodation.id, { state: accomodation })}>
            <figcaption className="figcaption-home">{accomodation.title}</figcaption>
            <img className="img-home" src={accomodation.cover} alt="cover"></img>
        </figure>)
};

export default CardsHome;