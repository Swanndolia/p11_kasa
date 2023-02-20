import { useNavigate } from "react-router-dom";

const CardsHome = ({accomodation}) => {
    const navigate = useNavigate();
    return (
        <figure onClick={() => navigate("/accomodation/" + accomodation.id )}>
            <figcaption>{accomodation.title}</figcaption>
            <img src={accomodation.cover} alt="cover"></img>
        </figure>)
};

export default CardsHome;