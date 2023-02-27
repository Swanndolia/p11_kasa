import bannerLink from "../assets/images/about_banner.svg"

import Banner from "../components/banner";
import Collapse from "../components/collapse";
import "../assets/css/about.css"

const About = () => {
  return (
    <>
      <Banner bannerLink={bannerLink} />
      <section className="about-section">
        <Collapse
          trigger="Fiabilité"
          content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
        />
        <Collapse
          trigger="Respect"
          content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse
          trigger="Service"
          content={<p >Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
        />
        <Collapse
          trigger="Responsabilité"
          content={<p >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />
      </section>
    </>
  )
};

export default About;