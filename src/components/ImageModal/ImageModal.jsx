import Modal from 'react-modal';
Modal.setAppElement('#root');

import css from './ImageModal.module.css';

const ImageModal = ({ onCloseModal, isModalOpen, bigImg }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      contentLabel="Big image"
      overlayClassName={css.backdrop}
      className={css.modal}
    >
      <div>
        <img src={bigImg.urls.regular} alt={bigImg.alt_description} />
        <p className={css.description}>{bigImg.description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
