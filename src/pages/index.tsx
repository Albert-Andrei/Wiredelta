import { useMemo, useState } from 'react';
import useSWR from 'swr';
import type { NextPage } from 'next';
import NavigationBar from '@components/NavigationBar';
import Pagination from '@components/Pagination';
import ThemeSwitch from '@components/ThemeSwitch';
import styled from 'styled-components';
import { Container } from '@components/Container';

const Landing: NextPage = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useSWR('/ability?limit=327&offset=0');

  // results
  // search text
  // results per page
  // sort criteria
  // page

  // content = useMemo(() => {}, [...dependencies])
  // ---> filter & sort

  const pages = useMemo(() => {
    return Math.ceil(array.length / pageSize);
  }, [pageSize]);

  const handleNextPage = () => {
    if (pages > pageNumber) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  // function paginate(array, page_size, page_number) {
  //   // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  //   return array.slice((page_number - 1) * page_size, page_number * page_size);
  // }

  const pagination = (
    <Pagination
      pages={pages}
      currentPage={pageNumber}
      onNext={handleNextPage}
      onBack={handlePreviousPage}
    />
  );

  return (
    <ContentContainer>
      <title>Pokemons</title>
      <NavigationBar onChange={() => {}} />
      <Container>
        <Main>
          <SwitchWrapper>
            <ThemeSwitch />
          </SwitchWrapper>
          <div style={{ marginTop: 20 }}>{pagination}</div>
          <Grid>
            {array.map((value) => (
              <div
                key={value}
                style={{ width: '100%', height: 400, background: 'red' }}
              />
            ))}
          </Grid>
          <div style={{ marginTop: 50, marginBottom: 50 }}>{pagination}</div>
        </Main>
      </Container>
    </ContentContainer>
  );
};

export default Landing;

const ContentContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.default.background};
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.default.fontColor};
`;

const SwitchWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
`;

const Grid = styled.div`
  margin-top: 30px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
`;
