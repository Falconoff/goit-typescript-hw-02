// import css from './SearchBar.module.css'
import { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Text must be entered to search for images');

type Props = { onSearch: (searchText: string) => void };

const SearchBar = ({ onSearch }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const inputValue: string = (
      event.currentTarget.elements.namedItem('search') as HTMLInputElement
    ).value.trim();

    // --- before TypeScript it was: ---
    // const inputValue =
    //   event.currentTarget.elements.search.value.trim();
    // console.log('inputValue: ', inputValue);

    if (inputValue === '') {
      notify();
      return;
    }

    onSearch(inputValue);
    event.currentTarget.reset();
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
