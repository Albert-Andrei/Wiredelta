import { ChangeEvent } from 'react';
import { Search } from '@components/Icons/Search';
import { Input, SearchBarContainer } from './SearchBar.styles';
import { useDarkMode } from '@contexts/ThemeContext';

interface SearchBarProps {
  onChange: (text: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  const darkMode = useDarkMode();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target?.value);
  };

  return (
    <SearchBarContainer darkMode={darkMode}>
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
