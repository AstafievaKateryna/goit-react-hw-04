import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onSetModal, imageData }) => {
  const {
    description,
    urls,
    // likes,
    // tags,
    // user: { name, location },
    alt_description,
  } = imageData;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0F0F0",
    },
  };

  const onCloseModal = () => {
    onSetModal(false);
  };

  const handleBodyClassRemove = () => {
    document.body.classList.remove("ReactModal__Body--open");
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onCloseModal}
      className={s.modal}
      contentLabel="Image Modal window"
      preventScroll={true}
      onAfterClose={handleBodyClassRemove}
    >
      <div className={s.content}>
        <div>
          <button className={s.btn} onClick={onCloseModal} type="button">
            X
          </button>
        </div>
        <img className={s.img} src={urls.regular} alt={alt_description} />

        <p className={s.description}>{description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
