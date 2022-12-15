import Dropdown from '@components/Dropdown';
import SearchBar from '@components/SearchBar';
import { Container } from '@components/Container';
import { Grid, SearchBarContainer } from './NavigationBar.styles';
import {
  DropdownMenuItem,
  PageSize,
  ResultSort,
} from '../../types/dropdown.types';

interface NavigationBarProps {
  pageSize: string;
  sortType: string;
  onSearch: (text: string) => void;
  onSortTypeChange: (option: DropdownMenuItem) => void;
  onPageSizeChange: (option: DropdownMenuItem) => void;
}

const NavigationBar = ({
  pageSize,
  sortType,
  onSearch,
  onPageSizeChange,
  onSortTypeChange,
}: NavigationBarProps) => {
  return (
    <SearchBarContainer>
      <Container>
        <Grid>
          <Dropdown
            value={pageSize}
            options={[
              { label: 'Show 10 results', value: PageSize.TEN },
              { label: 'Show 20 results', value: PageSize.TWENTY },
              { label: 'Show 30 results', value: PageSize.THIRTY },
            ]}
            onChange={onPageSizeChange}
          />
          <SearchBar onChange={onSearch} />
          <Dropdown
            value={sortType}
            label="Sort items"
            options={[
              { label: 'From A-Z', value: ResultSort.ASC },
              { label: 'From Z-A', value: ResultSort.DESC },
              { label: 'By Height', value: ResultSort.HEIGHT },
              { label: 'By Weight', value: ResultSort.WEIGHT },
            ]}
            onChange={onSortTypeChange}
          />
        </Grid>
      </Container>
    </SearchBarContainer>
  );
};

export default NavigationBar;
