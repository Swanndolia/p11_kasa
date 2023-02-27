import { useLocation } from 'react-router-dom';
import Collapse from '../components/collapse';
import Carousel from '../components/carousel';

import "../assets/css/accomodation.css"

const Accomodation = () => {
  const accomodation = useLocation().state
  return (
    <>
      <Carousel pictures={accomodation.pictures} />
      <h1>{accomodation.title}</h1>
      <h2>{accomodation.location}</h2>
      <div className='tag-list'>
        {accomodation.tags.map(tag => (
          <span className='tag-item' key={tag}>{tag}</span>
        ))}
      </div>
      <section className='accomodation-section'>
      <Collapse
        trigger="Description"
        content={<p>{accomodation.description}</p>}
      />
      <Collapse
        trigger="Equipements"
        content={
          <ul>{accomodation.equipments.map(equipement => (
            <li key={equipement}>{equipement}</li>
          ))}
          </ul>
        }
      />
      </section>
    </>
  );
};

export default Accomodation;