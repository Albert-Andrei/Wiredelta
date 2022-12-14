import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  box-shadow: 0px 2px 10px #00000029;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 20px;
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
