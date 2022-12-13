import Switch from '@components/Switch';
import Typography from '@components/Typography';
import { useThemeContext } from '@contexts/ThemeContext';
import { SwitchContaier } from './ThemeSwitch.styles';

const ThemeSwitch = () => {
  const { darkMode, onSwitchDarkMode } = useThemeContext();

  return (
    <SwitchContaier>
      <Typography opacity={darkMode ? 0.5 : 1} marginRight={10}>
        Light mode
      </Typography>
      <Switch checked={darkMode} onChange={onSwitchDarkMode} />
      <Typography opacity={darkMode ? 1 : 0.5} marginLeft={10}>
        Dark mode
      </Typography>
    </SwitchContaier>
  );
};

export default ThemeSwitch;
