import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { fetcher } from '@lib/fetchers';
import { Pokemon } from '../../types/pokemon.types';
import styled, { useTheme } from 'styled-components';
import { Container } from '@components/Container';
import Image from 'next/image';
import ThemeSwitch from '@components/ThemeSwitch';
import Typography from '@components/Typography';
import { ArrowDown } from '@components/Icons/ArrowDown';
import { useDarkMode } from '@contexts/ThemeContext';
import { defaultPokemonImage } from '@constants/defaultImageSources';
import AccordionItem from '@components/AccordionItem';
import { AccordionSingleProps, Root } from '@radix-ui/react-accordion';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface PokemonPageProps {
  pokemon: Pokemon.PokemonResponse;
}

const Pokemon: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const theme = useTheme();
  const router = useRouter();
  const darkMode = useDarkMode();

  return (
    <Main darkMode={darkMode}>
      <Head>
        <title>{pokemon?.name}</title>
      </Head>
      <Container>
        <ContentContainer>
          <Grid>
            <StyledButton darkMode={darkMode} onClick={() => router.back()}>
              <IconWrapper>
                <ArrowDown />
              </IconWrapper>
              <Typography>Back</Typography>
            </StyledButton>

            <ImageWrapper>
              <Image
                fill
                src={pokemon?.sprites?.front_default || defaultPokemonImage}
                alt={pokemon?.name}
              />
            </ImageWrapper>

            <SwitchWrapper>
              <ThemeSwitch />
            </SwitchWrapper>
          </Grid>
          <NameWrapper>
            <Typography font="bold" textTransform="capitalize">
              {pokemon?.name}
            </Typography>
          </NameWrapper>
          <DetailsWrapper>
            <Typography>Height: {pokemon?.height}</Typography>
            <Typography>Weight: {pokemon?.weight}</Typography>
            <Typography>Base experience: {pokemon?.base_experience}</Typography>
            <Typography>Default: {'true'}</Typography>
            <Typography>Order: {1}</Typography>
            <Typography textTransform="capitalize">
              Species: {pokemon?.species.name}
            </Typography>
          </DetailsWrapper>

          <AccordionWrapper type="single" collapsible>
            {pokemon?.abilities?.length && (
              <AccordionItem index={1} title="Abilities">
                <ContentWrapper>
                  {pokemon?.abilities.map((ability) => (
                    <Typography
                      key={ability?.ability?.name}
                      marginBottom={10}
                      textTransform="capitalize"
                    >
                      <span
                        style={{
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.blue,
                          marginRight: 10,
                        }}
                      >
                        •
                      </span>
                      {ability?.ability?.name}
                    </Typography>
                  ))}
                </ContentWrapper>
              </AccordionItem>
            )}
            {pokemon?.forms?.length && (
              <AccordionItem index={2} title="Forms">
                <ContentWrapper>
                  {pokemon?.forms.map((form) => (
                    <Typography
                      key={form?.name}
                      marginBottom={10}
                      textTransform="capitalize"
                    >
                      <span
                        style={{
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.blue,
                          marginRight: 10,
                        }}
                      >
                        •
                      </span>
                      {form?.name}
                    </Typography>
                  ))}
                </ContentWrapper>
              </AccordionItem>
            )}
            {pokemon?.types?.length && (
              <AccordionItem index={3} title="Types">
                <ContentWrapper>
                  {pokemon?.types.map((type) => (
                    <Typography
                      key={type.type.name}
                      marginBottom={10}
                      textTransform="capitalize"
                    >
                      <span
                        style={{
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.blue,
                          marginRight: 10,
                        }}
                      >
                        •
                      </span>
                      Name: {type.type.name}
                      <Typography marginLeft={50}>Slot: {type.slot}</Typography>
                    </Typography>
                  ))}
                </ContentWrapper>
              </AccordionItem>
            )}
            {pokemon?.game_indices?.length && (
              <AccordionItem index={4} title="Game indices">
                <ContentWrapper>
                  {pokemon?.game_indices.map((ind, index) => (
                    <Typography
                      key={ind.version.name + index.toString()}
                      marginBottom={10}
                      textTransform="capitalize"
                    >
                      <span
                        style={{
                          color: darkMode
                            ? theme.colors.white
                            : theme.colors.blue,
                          marginRight: 10,
                        }}
                      >
                        •
                      </span>
                      Game Index: {ind.game_index} Version: {ind.version.name}
                    </Typography>
                  ))}
                </ContentWrapper>
              </AccordionItem>
            )}
          </AccordionWrapper>
        </ContentContainer>
      </Container>
    </Main>
  );
};

export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons: Pokemon.Response = await fetcher('/pokemon?limit=1154');

  const paths = pokemons?.results.map((poky) => ({
    params: { name: poky.name },
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

const Main = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  background: ${({ theme, darkMode }) =>
    darkMode ? '#1F374A' : theme.colors.white};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 760px;
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

type AccordionRootProps = AccordionSingleProps &
  React.RefAttributes<HTMLDivElement>;

const AccordionWrapper = styled(Root)<AccordionRootProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 35px 10px 35px;
`;
