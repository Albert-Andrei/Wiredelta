import { useDarkMode } from '@contexts/ThemeContext';
import { useTheme } from 'styled-components';
import * as Styles from './Switch.styles';

export interface SwitchProps {
  checked?: boolean;
  onChange: (e?: any) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
}: SwitchProps) => {
  const theme = useTheme();
  const darkMode = useDarkMode();

  return (
    <Styles.SwitchContaier checked={checked} onCheckedChange={onChange}>
      <Styles.Thumb>
        <Styles.ThumbContent
          style={{
            backgroundColor: darkMode ? theme.colors.white : theme.colors.blue,
          }}
        />
      </Styles.Thumb>
    </Styles.SwitchContaier>
  );
};
