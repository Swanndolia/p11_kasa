import { useState } from 'react';

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
            <img src={pictures[index]}></img>
            <figcaption>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </figcaption>
        </figure>
    );
};

export default Carousel;