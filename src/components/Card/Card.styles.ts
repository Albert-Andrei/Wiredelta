import styled from 'styled-components';

export const CardContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  padding: 30px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: ${({ darkMode }) => (darkMode ? 10 : 20)}px;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  border-color: ${({ theme, darkMode }) =>
    darkMode ? theme.default.primary : theme.colors.grey};
  background: ${({ theme }) => theme.default.primary};

  ${({ theme }) => theme.breakpoints.maxLg} {
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div<{ darkMode: boolean }>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #f5f5f5;
  border-color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.white : theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.blue};

  ${({ theme }) => theme.breakpoints.maxLg} {
    border-radius: 15px;
  }
`;

export const ContentRow = styled.div<{ marginTop?: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${({ marginTop }) => marginTop || '0'}px;

  p {
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.maxLg} {
    p {
      font-size: 14px;
    }
  }
`;

export const AbilitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 53px;

  ${({ theme }) => theme.breakpoints.maxLg} {
    min-height: 35px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 70px;
  background: #e4e4e4;

  ${({ theme }) => theme.breakpoints.maxLg} {
    margin-top: 30px;
  }
`;

export const DetailsButton = styled.button<{ darkMode: boolean }>`
  cursor: pointer;
  margin-top: 15px;
  border: none;
  background: none;
  padding-bottom: 10px;
  border-bottom: 2px solid blue;
  border-color: transparent;
  transition: all 0.3s;

  p {
    transition: all 0.3s;
    scale: 1;
  }

  &:hover {
    border-color: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.white : theme.colors.blue};
    transition: all 0.3s;

    p {
      transition: all 0.3s;
      scale: 1.1;
    }
  }
`;
