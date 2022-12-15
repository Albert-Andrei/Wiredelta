import * as Accordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';

export const AccordionContainer = styled(Accordion.Item)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px ${({ theme }) => theme.colors.blue} solid;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    border-top: none;
    margin-top: 5px;
  }
`;

export const TitleWrapper = styled(Accordion.Trigger)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const ContentText = styled(Accordion.Content)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  transition: 0.25s;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;
