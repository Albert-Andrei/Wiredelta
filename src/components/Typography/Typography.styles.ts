import styled from 'styled-components';

export const TextContainer = styled.p<{
  color?: string;
  align?: string;
  font?: string;
  size?: number | null;
  lineHeight?: number;
}>`
  font-family: 'Roboto', sans-serif;
  font-size: ${({ size, theme }) => (size ? size : theme.fontSizes.normal)}px;
  font-weight: ${({ font }) =>
    font === 'bold' ? '700' : font === 'normal' ? '400' : '300'};
  color: ${({ theme }) => theme.colors.grey9};
  display: inline-block;
  text-align: ${({ align }) => (align ? align : 'left')};
  justify-content: ${({ align }) =>
    align === 'left'
      ? 'flex-start'
      : align === 'center'
      ? 'center'
      : 'flex-end'};
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : '')}
  white-space: pre-line;
`;
