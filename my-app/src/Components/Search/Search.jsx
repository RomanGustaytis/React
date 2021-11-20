import './Search.css';
import { FaSearch } from 'react-icons/fa';

const Search = ({onChange, placeholder}) => {

  return (
    <div className="Search">
      <span className="SearchSpan">
        <FaSearch />
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;