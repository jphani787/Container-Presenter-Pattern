const Modal = ({ children }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-container">

            </div>
        </div>
    )
}

const ModalHeader = ({ children }) => {
    return <div className="modal-title">{children}</div>
}

const ModalBody = ({ children }) => {
    return <div className="modal-body">{children}</div>
}

const ModalFooter = ({ children }) => {
    return <div className="modal-footer">{children}</div>
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;