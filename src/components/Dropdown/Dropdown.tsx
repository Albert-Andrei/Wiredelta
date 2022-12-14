import { useEffect, useState } from 'react';
import { IconWrapper, Item, Content, Trigger } from './Dropdown.styles';
import Typography from '@components/Typography';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ArrowDown } from '@components/Icons/ArrowDown';
import { useTheme } from 'styled-components';
import { DropdownMenuItem } from '../../types/dropdown.types';

interface DropdownProps {
  label?: string;
  options: DropdownMenuItem[];
  onChange: (option: DropdownMenuItem) => void;
}

const DropdownMenu = ({ label, options, onChange }: DropdownProps) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<DropdownMenuItem>();

  useEffect(() => {
    if (options?.length > 0) {
      setSelectedItem(options[0]);
    }
  }, []);

  const handleChange = (option: DropdownMenuItem) => {
    setSelectedItem(option);
    onChange(option);
  };

  return (
    <Dropdown.Root>
      <Trigger>
        <Typography size={19} color={theme.default.fontColor} opacity={0.5}>
          {label || selectedItem?.label}
        </Typography>
        <IconWrapper>
          <ArrowDown />
        </IconWrapper>
      </Trigger>
      <Content>
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
