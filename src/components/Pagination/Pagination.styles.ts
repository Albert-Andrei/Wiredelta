import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.maxLg} {
    p {
      font-size: 14px;
    }
  }
`;

export const PageContainer = styled.div`
  margin: 0px 15px;

  ${({ theme }) => theme.breakpoints.maxLg} {
    margin: 0px 10px;
  }
`;

export const IndicatorWrapper = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;

  p {
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;

    p {
      font-weight: ${({ active }) => (active ? '500' : '200')};
      text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
    }
  }
`;
