import styled, { keyframes } from 'styled-components';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

export const Trigger = styled(Dropdown.Trigger)`
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: ${({ theme }) => theme.spacings.small}px;
  overflow: hidden;
  background: ${({ theme }) => theme.default.primary};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};

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

export const IconWrapper = styled.div<{ darkMode: boolean }>`
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.white : theme.colors.blue};
  }

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
  width: 310px;
  padding: ${({ theme }) => theme.spacings.large}px;
  padding-bottom: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.default.primary};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacings.small}px;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};

  &[data-state='open'] {
    animation: ${show} 0.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state='closed'] {
    animation: ${hide} 0.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  ${({ theme }) => theme.breakpoints.maxLg} {
    width: 260px;

    p {
      font-size: 14px;
    }
  }
`;

export const Item = styled(Dropdown.Item)<{ isActive: boolean }>`
  margin-bottom: 15px;

  p {
    opacity: ${({ isActive }) => (isActive ? 0.5 : 1)};
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: white;

    p {
      font-weight: ${({ isActive }) => (isActive ? '300' : '500')};
      text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
    }
  }

  &:focus {
    outline: none !important;
  }

  ${({ theme }) => theme.breakpoints.maxLg} {
    margin-bottom: ${({ theme }) => theme.spacings.small}px;
  }
`;
