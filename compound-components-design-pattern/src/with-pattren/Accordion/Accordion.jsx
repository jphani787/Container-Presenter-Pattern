import { useState } from "react";
const Accordion = ({ children }) => {
    return (
        <div className="accordion">
            {children}
        </div>
    );
};

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>{title}</button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

Accordion.Item = AccordionItem;

export default Accordion;