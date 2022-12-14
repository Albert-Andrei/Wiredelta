import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1620px;

  ${({ theme }) => theme.breakpoints.maxLg} {
    max-width: 1200px;
  }
`;
