// import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Text must be entered to search for images');

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const inputValue = evt.currentTarget.elements.search.value.trim();

    if (inputValue === '') {
      notify();
      return;
    }

    onSearch(inputValue);
    evt.currentTarget.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
