import axios from 'axios';

const ACCESS_KEY = 'yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 4,
};

export const getImages = async (searchValue, page) => {
  const { data } = await axios.get(
    `?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}`
  );

  return data;
};
