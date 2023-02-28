import { useState } from 'react';

import arrow_down from "../assets/images/arrow_down.svg"
import arrow_up from "../assets/images/arrow_up.svg"

import '../assets/css/collapse.css';



const Collapse = ({ trigger, content }) => {
    const [isOpen, setOpen] = useState(0);
    return (
        <div className="dropdown">
            <button className='collapse-btn' onClick={() => setOpen(!isOpen)}>{<><span>{trigger}</span> <img alt="collapse arrow" src={isOpen ? arrow_up : arrow_down}/></>}</button>
            {isOpen ? (content) : null}
        </div>
    );
};
export default Collapse;