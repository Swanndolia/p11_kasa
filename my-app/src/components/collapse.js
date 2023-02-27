import { useState } from 'react';

import '../assets/css/collapse.css';

const Collapse = ({ trigger, content }) => {
    const [isOpen, setOpen] = useState(0);
    return (
        <div className="dropdown">
            <button className='collapse-btn' onClick={() => setOpen(!isOpen)}>{trigger}</button>
            {isOpen ? (content) : null}
        </div>
    );
};
export default Collapse;