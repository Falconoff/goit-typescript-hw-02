import axios from 'axios';
import { Image } from '../types';

const ACCESS_KEY = 'yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 4,
};

interface imagesResponse {
  results: Image[];
  total_pages: number;
}

export const getImages = async (
  searchValue: string,
  page: number
): Promise<imagesResponse> => {
  const { data } = await axios.get<imagesResponse>(
    `?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}`
  );

  return data;
};
