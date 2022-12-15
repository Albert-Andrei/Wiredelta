import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { fetcher } from '@lib/fetchers';
import { Pokemon } from '../../types/pokemon.types';
import styled from 'styled-components';
import { Container } from '@components/Container';
import Image from 'next/image';
import ThemeSwitch from '@components/ThemeSwitch';
import Typography from '@components/Typography';
import { ArrowDown } from '@components/Icons/ArrowDown';
import { useDarkMode } from '@contexts/ThemeContext';

interface PokemonPageProps {
  pokemon: Pokemon.PokemonResponse;
}

const Pokemon: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const darkMode = useDarkMode();

  return (
    <Main>
      <Container>
        <ContentContainer>
          <Grid>
            <StyledButton darkMode={darkMode}>
              <IconWrapper>
                <ArrowDown />
              </IconWrapper>
              <Typography>Back</Typography>
            </StyledButton>

            <ImageWrapper>
              <Image
                fill
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </ImageWrapper>

            <SwitchWrapper>
              <ThemeSwitch />
            </SwitchWrapper>
          </Grid>
          <NameWrapper>
            <Typography font="bold" textTransform="capitalize">
              {pokemon.name}
            </Typography>
          </NameWrapper>
          <DetailsWrapper>
            <Typography>Height: {pokemon.height}</Typography>
            <Typography>Weight: {pokemon.weight}</Typography>
            <Typography>Base experience: {pokemon.base_experience}</Typography>
            <Typography>Default: {'true'}</Typography>
            <Typography>Order: {1}</Typography>
            <Typography textTransform="capitalize">
              Species: {pokemon.species.name}
            </Typography>
          </DetailsWrapper>
        </ContentContainer>
      </Container>
    </Main>
  );
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons: Pokemon.Response = await fetcher('/pokemon?limit=1154');

  const paths = pokemons?.results.map((poky) => ({
    params: { name: poky.name.toLocaleLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PokemonPageProps> = async ({
  params,
}) => {
  const pokemon: Pokemon.PokemonResponse = await fetcher(
    `/pokemon/${params?.name}`,
  );
  return {
    props: {
      // The JSON conversion is used to remove undefined values and non-serializable values
      pokemon: JSON.parse(JSON.stringify(pokemon)),
    },
  };
};

const Main = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.default.primary};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  margin-top: 50px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
`;

const StyledButton = styled.button<{ darkMode: boolean }>`
  position: relative;
  height: 50px;
  max-width: 200px;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.white : theme.colors.blue};
  border: 1px solid #367aac;
  box-shadow: 0px 2px 10px #00000029;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.2s ease-in;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.blue : theme.colors.white};
  }

  svg {
    stroke: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.blue : theme.colors.white};
  }

  &:hover {
    background: #fff;
    border: 2px solid #367aac;
    transition: border 0.2s ease-in;

    p {
      color: #367aac;
      text-decoration: underline;
    }

    svg {
      stroke: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  transform: rotate(90deg);
  left: 45px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background: #367aac;
  overflow: hidden;
  border-radius: 20px;
`;

const SwitchWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
`;

const NameWrapper = styled.div`
  margin-top: 30px;

  p {
    font-size: 30px;
  }
`;

const DetailsWrapper = styled.div`
  margin-top: 15px;
  height: 50px;
  display: inline-grid;
  grid-template-columns: repeat(6, auto);
  gap: 50px;

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.default.fontColor};
  }
`;
