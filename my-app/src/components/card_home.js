const CardsHome = (props) => {
    const accomodation = props.accomodation
    return (
        <figure>
            <figcaption>{accomodation.title}</figcaption>
            <img src={accomodation.cover} alt="cover"></img>
        </figure>)
};

export default CardsHome;