import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible">
            <button className="toggle-button" onClick={toggleCollapse}>
                <span className="text">{title}</span>
                <i className={`icon fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
            <div className={`content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapsible;
