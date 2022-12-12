import Dropdown from '@components/Dropdown';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Landing: NextPage = () => {
  return (
    <Main>
      <title>Pokemons</title>
      <Dropdown
        options={['Show 10 results', 'Show 20 results', 'Show 30 results']}
      />
      <p>
        Welcome to
        <a href="https://nextjs.org"> Next.js!</a>
      </p>

      <p>
        Here we begin with
        <b> Excelsis</b>
      </p>
    </Main>
  );
};

export default Landing;

const Main = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.default.background};
  color: ${({ theme }) => theme.default.fontColor};
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.maxMd} {
    padding: 0 50px;
  }

  ${({ theme }) => theme.breakpoints.maxSm} {
    padding: 0 20px;
  }
`;
