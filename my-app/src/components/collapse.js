import { useState } from 'react';

const Collapse = ({ trigger, content }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <button onClick={() => setOpen(!isOpen)}>{trigger}</button>
            {isOpen ? (content) : null}
        </div>
    );
};
export default Collapse;