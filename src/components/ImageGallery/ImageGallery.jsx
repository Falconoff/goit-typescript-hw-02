import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, showBigImg }) => {
  return (
    <>
      <h3>ImageGallery</h3>
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
