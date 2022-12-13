import { ChangeEvent } from 'react';
import { Search } from '@components/Icons/Search';
import { Input, SearchBarContainer } from './SearchBar.styles';

interface SearchBarProps {
  onChange: (val: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target?.value);
  };

  return (
    <SearchBarContainer>
      <Search />
      <Input
        type="text"
        name="search"
        placeholder="Search Teams"
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
