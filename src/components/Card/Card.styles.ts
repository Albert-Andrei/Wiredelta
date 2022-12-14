import styled from 'styled-components';

export const CardContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: ${({ darkMode }) => (darkMode ? 10 : 20)}px;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  border-color: ${({ theme, darkMode }) =>
    darkMode ? theme.default.primary : theme.colors.grey};
  background: ${({ theme }) => theme.default.primary};
`;

export const ImageWrapper = styled.div<{ darkMode: boolean }>`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #f5f5f5;
  border-color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.white : theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const ContentRow = styled.div<{ marginTop?: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${({ marginTop }) => marginTop || '0'}px;
`;

export const AbilitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 53px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 70px;
  background: #e4e4e4;
`;

export const DetailsButton = styled.button`
  margin-top: 15px;
  border: none;
  background: none;
`;
