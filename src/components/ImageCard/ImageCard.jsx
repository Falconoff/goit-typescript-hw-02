import css from './ImageCard.module.css';

const ImageCard = ({ image, showBigImg }) => {
  const handleClk = () => {
    showBigImg(image);
  };
  return (
    <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClk}
      />
    </div>
  );
};

export default ImageCard;
