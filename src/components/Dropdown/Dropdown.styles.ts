import styled, { keyframes } from 'styled-components';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

export const Trigger = styled(Dropdown.Trigger)`
  position: relative;
  width: 320px;
  height: 50px;
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
`;

export const IconWrapper = styled.div`
  transition: 0.5s;
  width: 36px;
  height: 36px;

  [data-state='open'] & {
    transform: rotateX(180deg);
  }
`;

export const show = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const Content = styled(Dropdown.Content)`
  width: 320px;
  padding: 20px;
  padding-bottom: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  box-shadow: 0px 2px 10px #00000029;

  &[data-state='open'] {
    animation: ${show} 0.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state='closed'] {
    animation: ${hide} 0.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
`;

export const Item = styled(Dropdown.Item)<{ active: boolean }>`
  margin-bottom: 15px;

  p {
    opacity: ${({ active }) => (active ? 0.5 : 1)};
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: white;

    p {
      font-weight: ${({ active }) => (active ? '300' : '500')};
      text-decoration: ${({ active }) => (active ? 'none' : 'underline')};
    }
  }

  &:focus {
    outline: none !important;
  }
`;
