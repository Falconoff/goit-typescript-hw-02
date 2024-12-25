import ImageCard from '../ImageCard/ImageCard';

import { Image } from '../../types';

import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  showBigImg: (image: Image) => void;
}

const ImageGallery = ({ images, showBigImg }: ImageGalleryProps) => {
  return (
    <>
      <h2>ImageGallery</h2>
      <ul>
        {images !== null &&
          images.map(image => {
            return (
              <li className={css.card} key={image.id}>
                <ImageCard image={image} showBigImg={showBigImg} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ImageGallery;
