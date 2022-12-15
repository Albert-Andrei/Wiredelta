import Typography from '@components/Typography';
import { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContainer,
  ContentText,
  TitleWrapper,
} from './Accordion.styles';

export interface AccordionProps {
  index: number;
  title: String;
  content: String;
}

const Foldable = ({ index, title, content }: AccordionProps) => {
  return (
    <AccordionContainer value={'item-' + index}>
      <Accordion.Header style={{ width: '100%', margin: 0 }}>
        <TitleWrapper>
          <Typography></Typography>
        </TitleWrapper>
      </Accordion.Header>

      <ContentText>
        <Typography></Typography>
      </ContentText>
    </AccordionContainer>
  );
};

export default Foldable;
