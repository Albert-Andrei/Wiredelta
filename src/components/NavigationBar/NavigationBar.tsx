import Dropdown from '@components/Dropdown';
import SearchBar from '@components/SearchBar';
import { Container } from '@components/Container';
import { Grid, SearchBarContainer } from './NavigationBar.styles';

interface NavigationBarProps {
  onChange: (val: string) => void;
}

const NavigationBar = ({ onChange }: NavigationBarProps) => {
  return (
    <SearchBarContainer>
      <Container>
        <Grid>
          <Dropdown
            options={[
              { label: 'Show 10 results', value: '0' },
              { label: 'Show 20 results', value: '0' },
              { label: 'Show 30 results', value: '0' },
            ]}
          />
          <SearchBar onChange={onChange} />
          <Dropdown
            label="Sort items"
            options={[
              { label: 'From A-Z', value: '0' },
              { label: 'From Z-A', value: '1' },
              { label: 'By Height', value: '2' },
              { label: 'By Weight', value: '3' },
            ]}
          />
        </Grid>
      </Container>
    </SearchBarContainer>
  );
};

export default NavigationBar;
