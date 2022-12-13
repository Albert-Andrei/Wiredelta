import { useEffect, useState } from 'react';
import { IconWrapper, Item, Content, Trigger } from './Dropdown.styles';
import Typography from '@components/Typography';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ArrowDown } from '@components/Icons/ArrowDown';
import { useTheme } from 'styled-components';

interface DropdownProps {
  label?: string;
  options: DropdownMenuItem[];
  onChange?: (e?: any) => void;
}

export interface DropdownMenuItem {
  label: string;
  value: string;
}

const DropdownMenu = ({ label, options, onChange }: DropdownProps) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<DropdownMenuItem>();

  useEffect(() => {
    if (options) {
      setSelectedItem(options[0]);
    }
  }, []);

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
            onClick={() => {
              setSelectedItem(option);
            }}
            active={option.label === selectedItem?.label}
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
