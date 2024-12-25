import { Image } from '../../types';

import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  showBigImg: (image: Image) => void;
}

const ImageCard = ({ image, showBigImg }: ImageCardProps) => {
  const handleClk = (): void => {
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
