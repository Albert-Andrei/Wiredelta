import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import type { NextPage } from 'next';
import NavigationBar from '@components/NavigationBar';
import Pagination from '@components/Pagination';
import ThemeSwitch from '@components/ThemeSwitch';
import styled from 'styled-components';
import { Container } from '@components/Container';
import { Pokemon } from '../types/pokemon.types';
import { ResultSort, PageSize } from '../types/dropdown.types';
import { multiFetcher } from '@lib/fetchers';
import Card from '@components/Card';
import Skeleton from '@components/Skeleton';
import { useLocalStorage } from 'hooks/useLocalStorage';
import Head from 'next/head';

const Landing: NextPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [sortType, setSortType] = useLocalStorage('type', ResultSort.ASC);
  const [pageSizeValue, setPageSizeValue] = useLocalStorage(
    'size',
    PageSize.TEN,
  );
  const { data } = useSWR<Pokemon.Response>('/pokemon?limit=1154');

  const pageSize = parseInt(pageSizeValue ?? PageSize.TEN);

  const { data: allPokemon, isLoading } = useSWR<Pokemon.PokemonResponse[]>(
    data?.results.map((pok) => pok.name),
    multiFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const sortedResult = useMemo(() => {
    if (!allPokemon) {
      return [];
    }

    switch (sortType) {
      case ResultSort.ASC:
        return allPokemon.sort((a, b) => a.name.localeCompare(b.name));
      case ResultSort.DESC:
        return allPokemon.sort((a, b) => -1 * a.name.localeCompare(b.name));
      case ResultSort.HEIGHT:
        return allPokemon.sort((a, b) => a.height - b.height);
      case ResultSort.WEIGHT:
        return allPokemon.sort((a, b) => a.weight - b.weight);
      default:
        return allPokemon;
    }
  }, [allPokemon, sortType]);

  const content = useMemo(() => {
    if (!sortedResult) {
      return [];
    }

    return sortedResult
      .filter((poke) =>
        poke.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      )
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }, [sortedResult, sortType, pageSize, pageNumber, searchText]);

  const pages = useMemo(() => {
    if (!allPokemon) {
      return 1;
    }
    return Math.ceil(allPokemon.length / pageSize);
  }, [allPokemon, pageSize]);

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
      <Head>
        <title>Pokemons</title>
      </Head>
      <NavigationBar
        sortType={sortType ?? ResultSort.ASC}
        pageSize={pageSizeValue ?? PageSize.TEN}
        onSearch={(text) => setSearchText(text)}
        onSortTypeChange={(option) => setSortType(option.value as ResultSort)}
        onPageSizeChange={(option) =>
          setPageSizeValue(option.value as PageSize)
        }
      />
      <Container>
        <Main>
          <SwitchWrapper>
            <ThemeSwitch />
          </SwitchWrapper>
          {!data ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <>
              <div style={{ marginTop: 20 }}>{pagination}</div>
              <Grid>
                {isLoading && !allPokemon
                  ? [...Array(20)].map((_, index) => <Skeleton key={index} />)
                  : content?.map((value) => {
                      const abilities = value.abilities
                        .map((ab) => ab.ability.name)
                        .slice(0, 2);
                      return (
                        <Card
                          key={value.name}
                          name={value.name}
                          height={value.height}
                          weight={value.weight}
                          abilities={abilities}
                          image={value.sprites.front_default}
                        />
                      );
                    })}
              </Grid>
              <div style={{ marginTop: 50, marginBottom: 50 }}>
                {pagination}
              </div>
            </>
          )}
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
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.default.fontColor};
`;

const SwitchWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacings.large}px;
  right: 0px;
`;

const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xlarge}px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;

  ${({ theme }) => theme.breakpoints.maxLg} {
    gap: ${({ theme }) => theme.spacings.xlarge}px;
  }
`;

const SpinnerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.blue}50;
  border-top: 5px ${({ theme }) => theme.colors.blue} solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
