import styled from 'styled-components';

export const SearchBarContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacings.small}px;
  overflow: hidden;
  background: ${({ theme }) => theme.default.primary};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  border-color: ${({ theme, darkMode }) =>
    darkMode ? theme.default.primary : theme.colors.grey};

  svg {
    stroke: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.white : theme.colors.blue};
  }

  outline-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.spacings.large}px;
  outline: none;

  ${({ theme }) => theme.breakpoints.maxLg} {
    height: 40px;
    border-radius: 8px;

    p {
      font-size: 14px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  margin-left: ${({ theme }) => theme.spacings.small}px;
  font-size: ${({ theme }) => theme.spacings.large}px;
  color: ${({ theme }) => theme.default.fontColor};
  background: ${({ theme }) => theme.default.primary};
  letter-spacing: 1px;
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.maxLg} {
    font-size: 15px;
  }
`;
