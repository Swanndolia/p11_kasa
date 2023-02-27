import { useLocation } from 'react-router-dom';
import Collapse from '../components/collapse';

const Accomodation = () => {
  const accomodation = useLocation().state
  return (
    <>
      <figure>
        <img src={accomodation.cover} alt="cover"></img>
        <figcaption>
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
        </figcaption>
      </figure>
      <div>{accomodation.tags.map(tag => (<span>{tag}</span>))}</div>
      <Collapse
        trigger="Description"
        content={<p>{accomodation.description}</p>}
      />
      <Collapse
        trigger="Equipements"
        content={<ul>{accomodation.equipments.map(equipement => (<li>{equipement}</li>))}</ul>}
      />
    </>
  );
};

export default Accomodation;