import { useEffect, useState } from 'react';
import { IconWrapper, Item, Content, Trigger } from './Dropdown.styles';
import Typography from '@components/Typography';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { ArrowDown } from '@components/Icons/ArrowDown';
import theme from '@theme/theme';
// import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';

interface DropdownProps {
  label?: string;
  options: string[];
  onChange?: (e?: any) => void;
}

const DropdownMenu = ({ label, options, onChange }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    if (options) {
      setSelectedItem(options[0]);
    }
  }, []);

  return (
    <Dropdown.Root>
      <Trigger>
        <Typography size={19} color={theme.default.fontColor} opacity={0.5}>
          {label || selectedItem}
        </Typography>
        <IconWrapper>
          <ArrowDown />
        </IconWrapper>
      </Trigger>

      <Content>
        {options.map((value, index) => (
          <Item
            key={index + value}
            onClick={() => {
              setSelectedItem(value);
            }}
            active={value === selectedItem}
          >
            <Typography size={19} color={theme.default.fontColor}>
              {value}
            </Typography>
          </Item>
        ))}
      </Content>
    </Dropdown.Root>
  );
};

export default DropdownMenu;
