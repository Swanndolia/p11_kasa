import CardsHome from "../components/card_home";
import accomodations from "../assets/json/accomodation.json"

const Home = () => {
  return generateCards();
};

function generateCards(){
  const accomodationsCards = []
  accomodations.forEach(accomodation => {
      accomodationsCards.push(<CardsHome accomodation={accomodation} key={accomodation.id}/>)
    });
  return accomodationsCards;
}

export default Home;