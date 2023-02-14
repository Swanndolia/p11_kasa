import accomodations from "../assets/json/accomodation.json"

const Home = () => {
  return generateCards()
};

function generateCards(){
  const accomodationsCards = []
  accomodations.forEach(accomodation => {
    accomodationsCards.push(
    <div key={accomodation.id}>
      <h1>{accomodation.title}</h1>
      <img src={accomodation.cover}></img>
    </div>
    )
  });
  return accomodationsCards;
};

export default Home;