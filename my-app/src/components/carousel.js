import { useState } from 'react';

import '../assets/css/carousel.css';

const Carousel = ({ pictures }) => {

    const [index, setIndex] = useState(0);
    const length = pictures.length;

    function handlePrevious() {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    function handleNext() {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <figure className="carousel">


            <figcaption className='carousel-caption'>
                <button onClick={handlePrevious}>&lt;</button>
                <p>{index + 1}/{length}</p>
                <button onClick={handleNext}>&gt;</button>
            </figcaption>
            <img className="carousel-img" src={pictures[index]}></img>

        </figure>
    );
};

export default Carousel;