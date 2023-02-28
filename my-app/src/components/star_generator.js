import '../assets/css/star_generator.css';

import star_uncolored from "../assets/images/star_uncolored.svg"
import star_colored from "../assets/images/star_colored.svg"


const StarGenerator = ({ amount }) => {
    function generateStar() {
        amount = parseInt(amount)
        const starArray = []
        for (let i = 0; i < amount; i++) {
            starArray.push(<img key={i} alt="colored star" src={star_colored} />)
        }
        for (let i = amount; i < 5; i++) {
            starArray.push(<img key={i} alt="colored star" src={star_uncolored} />)
        }
        return starArray
    }
    return (
        <div className='stars-container'>
            {generateStar()}
        </div>)
};

export default StarGenerator;