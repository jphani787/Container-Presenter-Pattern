const Card = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                {children}
                <button className="modal-close" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

const CardHeader = ({ children }) => {
    return <div className="modal-title">{children}</div>;
}

const CardBody = ({ children }) => {
    return <div className="modal-body">{children}</div>;
}

const CardFooter = ({ children }) => {
    return <div className="modal-footer">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;