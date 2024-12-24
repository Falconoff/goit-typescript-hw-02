import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getImages } from './api/imagesApi';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import { Image } from './types';

import './App.css';

function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // const [searchValue, setSearchValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bigImg, setBigImg] = useState<Image | null>(null);

  const onSearch = (inputValue: string): void => {
    setSearchValue(inputValue);
    setImages(null);
    setPage(1);
    setTotalPages(0);
  };

  const onLoadMore = (): void => {
    setPage(page + 1);
  };

  const onCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const showBigImg = (imgData: Image): void => {
    setBigImg(imgData);
    setIsModalOpen(true);
  };

  useEffect((): void => {
    // if (searchValue === null) return;
    if (!searchValue) return;

    async function fetchImages() {
      try {
        setIsLoading(true);

        const data = await getImages(searchValue, page);

        if (page !== 1 && images) {
          // setImages((prevImages): [] => [...prevImages, ...data.results]);
          setImages([...images, ...data.results]);
        } else {
          setImages(data.results);
        }
        setTotalPages(data.total_pages);
      } catch (error: any) {
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
