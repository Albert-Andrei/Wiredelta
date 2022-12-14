import styled from 'styled-components';

export const SwitchContaier = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.maxLg} {
    p {
      font-size: 14px;
    }
  }
`;
