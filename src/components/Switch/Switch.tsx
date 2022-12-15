import { useDarkMode } from '@contexts/ThemeContext';
import { useTheme } from 'styled-components';
import * as Styles from './Switch.styles';

export interface SwitchProps {
  checked?: boolean;
  onChange: () => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  const theme = useTheme();
  const darkMode = useDarkMode();

  return (
    <Styles.SwitchContaier checked={checked} onCheckedChange={onChange}>
      {/* @TODO: Make the size dynamic*/}
      {/* @TODO: Properly implement the dark mode variant*/}
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

export default Switch;
