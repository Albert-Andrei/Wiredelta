import { TextContainer } from './Typography.styles';

interface TypographyProps {
  color?: string;
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  font?: 'regular' | 'normal' | 'bold';
  size?: number;
}

const Typography: React.FC<TypographyProps & React.CSSProperties> = ({
  color,
  align = 'center',
  children,
  font = 'regular',
  size,
  ...props
}: TypographyProps): JSX.Element => {
  return (
    <TextContainer
      font={font}
      align={align}
      size={size}
      color={color}
      style={{ ...props }}
    >
      {children}
    </TextContainer>
  );
};

export default Typography;
