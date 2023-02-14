const CardsHome = (props) => {
    const accomodation = props.accomodation
    return (
        <div>
            <h1>{accomodation.title}</h1>
            <img src={accomodation.cover} alt="cover"></img>
        </div>)
};

export default CardsHome;