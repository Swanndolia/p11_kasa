import accomodations from "../assets/json/accomodation.json"
import bannerLink from "../assets/images/home_banner.svg"

import CardsHome from "../components/card_home";
import Banner from "../components/banner";

import "../assets/css/home.css"

const Home = () => {
  return (
    <>
      <Banner bannerLink={bannerLink} />
      <main>
        {generateCards()}
      </main>
    </>);
};

function generateCards() {
  const accomodationsCards = []
  accomodations.forEach(accomodation => {
    accomodationsCards.push(<CardsHome accomodation={accomodation} key={accomodation.id} />)
  });
  return accomodationsCards;
}

export default Home;