import Modal from 'react-modal';
Modal.setAppElement('#root');

import { Image } from '../../types';

import css from './ImageModal.module.css';

interface ImageModalProps {
  onCloseModal: () => void;
  isModalOpen: boolean;
  bigImg: Image;
}

const ImageModal = ({ onCloseModal, isModalOpen, bigImg }: ImageModalProps) => {
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
