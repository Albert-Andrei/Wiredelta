import Typography from '@components/Typography';
import { PropsWithChildren, useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContainer,
  Content,
  TitleWrapper,
} from './AccordionItem.styles';
import { useDarkMode } from '@contexts/ThemeContext';

export interface AccordionProps {
  index: number;
  title: String;
}

const Foldable = ({
  index,
  title,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const darkMode = useDarkMode();
  return (
    <AccordionContainer value={'item-' + index}>
      {/* @TODO: Blue title color when opened*/}
      <Accordion.Header style={{ width: '100%', margin: 0 }}>
        <TitleWrapper darkMode={darkMode}>
          <Typography font="bold">{title}</Typography>
        </TitleWrapper>
      </Accordion.Header>

      {/* @TODO: Proper animation */}
      {/* @TODO: Add the animated icon on the right side*/}
      <Content darkMode={darkMode}>{children}</Content>
    </AccordionContainer>
  );
};

export default Foldable;
