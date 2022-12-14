import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  background: ${({ theme }) => theme.default.background};
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  padding: 25px 0;

  ${({ theme }) => theme.breakpoints.maxLg} {
    padding: 15px 0;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 190px;

  ${({ theme }) => theme.breakpoints.maxLg} {
    gap: 90px;
  }
`;
