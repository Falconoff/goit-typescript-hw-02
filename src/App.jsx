import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getImages } from './api/imagesApi';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bigImg, setBigImg] = useState(null);

  const onSearch = inputValue => {
    setSearchValue(inputValue);
    setImages(null);
    setPage(1);
    setTotalPages(null);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const showBigImg = imgData => {
    setBigImg(imgData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (searchValue === null) return;

    async function fetchImages() {
      try {
        setIsLoading(true);

        const data = await getImages(searchValue, page);

        if (page !== 1) {
          setImages(prevImages => [...prevImages, ...data.results]);
        } else {
          setImages(data.results);
        }
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

  return (
    <div>
      <h1>ImageFinder</h1>
      <SearchBar onSearch={onSearch} />
      {error && <ErrorMessage error={error} />}
      {images !== null && images.length > 0 && (
        <ImageGallery images={images} showBigImg={showBigImg} />
      )}
      {images !== null && images.length === 0 && <p>I can`t find it</p>}
      {totalPages > page && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}

      {bigImg && (
        <ImageModal
          onCloseModal={onCloseModal}
          isModalOpen={isModalOpen}
          bigImg={bigImg}
        />
      )}
    </div>
  );
}

export default App;
