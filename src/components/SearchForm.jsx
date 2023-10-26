import { useGlobalContext } from '../context';
import ThemeToggle from './ThemeToggle';

export const SearchForm = () => {
  const { setSearchTerm, setPage } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);

    const searchValue = e.target.elements['search'].value;
    setSearchTerm(searchValue);
    if (!searchValue) {
      return;
    }
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Please enter something to search for"
        />

        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <ThemeToggle />
    </section>
  );
};
