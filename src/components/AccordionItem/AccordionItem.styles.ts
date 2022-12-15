import * as Accordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';

export const AccordionContainer = styled(Accordion.Item)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TitleWrapper = styled(Accordion.Trigger)<{ darkMode: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: ${({ theme, darkMode }) =>
    darkMode ? '#4B4343' : theme.colors.white};
  outline: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0 20px;

  p {
    color: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.white : theme.default.fontColor};
  }
`;

export const slideDown = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
});

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
  to: { height: 0, opacity: 0 },
});

export const Content = styled(Accordion.Content)<{ darkMode: boolean }>`
  width: 100%;
  margin-top: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background: ${({ theme, darkMode }) =>
    darkMode ? '#4B4343' : theme.colors.white};
  outline: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: height, opacity 0.25s;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
`;
