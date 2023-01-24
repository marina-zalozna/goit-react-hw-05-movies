import { useSearchParams } from 'react-router-dom';
import { Input, Wrap, WrapMain } from './SearchBar.styled';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');

  if (query !== '') {
    onSearchSubmit(query);
  }

  const handleInput = e => {
    onSearchSubmit(query);
    setSearchParam({ query: e.target.value });
  };

  return (
    <WrapMain>
      <Wrap>
        <Input type="text" onChange={handleInput} value={query} />
      </Wrap>
    </WrapMain>
  );
};

export default SearchBar;