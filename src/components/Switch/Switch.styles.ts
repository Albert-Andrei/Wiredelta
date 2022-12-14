import styled from 'styled-components';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const SwitchContaier = styled(SwitchPrimitive.Root)`
  position: relative !important;
  width: 43px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 99px;
  outline: none;
  padding: 2px;
  margin: 0px;
  background: transparent;
  opacity: 0.5;

  ${({ theme }) => theme.breakpoints.maxLg} {
    width: 37px;
    border: 1.5px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  transition: transform 350ms ease-in-out;
  transform: translateX(0px);
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &[data-state='checked'] {
    transform: translateX(17px);

    ${({ theme }) => theme.breakpoints.maxLg} {
      transform: translateX(15px);
    }
  }

  ${({ theme }) => theme.breakpoints.maxLg} {
    width: 14px;
    height: 14px;
  }
`;

export const ThumbContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
