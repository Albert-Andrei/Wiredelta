import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 2px 10px #00000029;

  outline-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  outline: none;
`;

export const Input = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  margin-left: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.default.fontColor};
  letter-spacing: 1px;
  font-weight: 300;
`;
