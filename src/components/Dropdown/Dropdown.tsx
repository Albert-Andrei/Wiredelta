import { useEffect, useMemo, useState } from 'react';
import { IconWrapper, Item, Content, Trigger } from './Dropdown.styles';
import Typography from '@components/Typography';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ArrowDown } from '@components/Icons/ArrowDown';
import { useTheme } from 'styled-components';
import { DropdownMenuItem } from '../../types/dropdown.types';
import { useDarkMode } from '@contexts/ThemeContext';

interface DropdownProps {
  label?: string;
  value: string;
  options: DropdownMenuItem[];
  onChange: (option: DropdownMenuItem) => void;
}

const DropdownMenu = ({ label, options, value, onChange }: DropdownProps) => {
  const theme = useTheme();
  const darkMode = useDarkMode();
  // const [selectedItem, setSelectedItem] = useState<DropdownMenuItem>();

  const selectedItem = useMemo(() => {
    return options.find((x) => x.value === value) || options[0];
  }, [value, options]);

  // useEffect(() => {
  //   if (options?.length > 0) {
  //     setSelectedItem(options[0]);
  //   }
  // }, []);

  const handleChange = (option: DropdownMenuItem) => {
    // setSelectedItem(option);
    onChange(option);
  };

  return (
    <Dropdown.Root>
      <Trigger
        style={{
          borderColor: darkMode ? theme.default.primary : theme.colors.grey,
        }}
      >
        <Typography size={19} color={theme.default.fontColor} opacity={0.5}>
          {label || selectedItem?.label}
        </Typography>
        <IconWrapper darkMode={darkMode}>
          <ArrowDown />
        </IconWrapper>
      </Trigger>
      <Content
        style={{
          borderColor: darkMode ? theme.default.primary : theme.colors.grey,
        }}
      >
        {options.map((option) => (
          <Item
            key={option.label}
            onClick={() => handleChange(option)}
            isActive={option.label === selectedItem?.label}
          >
            <Typography size={19} color={theme.default.fontColor}>
              {option.label}
            </Typography>
          </Item>
        ))}
      </Content>
    </Dropdown.Root>
  );
};

export default DropdownMenu;
