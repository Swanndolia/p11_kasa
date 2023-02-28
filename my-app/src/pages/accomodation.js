import { Navigate, useLocation } from 'react-router-dom';

import StarGenerator from '../components/star_generator';
import Collapse from '../components/collapse';
import Carousel from '../components/carousel';

import "../assets/css/accomodation.css"

const Accomodation = () => {

  const accomodation = useLocation().state
  if (!accomodation) {
    return <Navigate to='/error404' />;
  }
  return (
    <>
      <Carousel pictures={accomodation.pictures} />
      <span id="details-container">
        <article className='details-accomodation'>
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
          <div className='tag-list'>
            {accomodation.tags.map(tag => (
              <span className='tag-item' key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <article className='rating-accomodation'>
          <span className='host-details'>
            <p>{accomodation.host.name}</p>
            <img alt="host" className='host-picture' src={accomodation.host.picture} />
          </span>
          <StarGenerator amount={accomodation.rating} />
        </article>
      </span>
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
  )
};

export default Accomodation;