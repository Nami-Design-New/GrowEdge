import { Modal } from "react-bootstrap";
export default function SuccessModal({
  show,
  onClose,
  title,
  message,
  buttonText,
  onButtonClick,
}) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      dialogClassName="success-modal" 
    >
      <Modal.Body className="text-center">
        <i className="fa-solid fa-circle-check"></i>
        <h5>{title || "Success!"}</h5>
        <p>{message}</p>
        <button className="btn-outline" onClick={onButtonClick}>
          {buttonText}
        </button>
      </Modal.Body>
    </Modal>
  );
}
