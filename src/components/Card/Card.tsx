import Typography from '@components/Typography';
import { defaultPokemonImage } from '@constants/defaultImageSources';
import { useDarkMode } from '@contexts/ThemeContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import {
  AbilitiesWrapper,
  CardContainer,
  ContentRow,
  DetailsButton,
  ImageWrapper,
  Separator,
} from './Card.styles';

export interface CardProps {
  image: string;
  name: string;
  height: number;
  weight: number;
  abilities: string[];
}

const Card = ({ image, name, height, weight, abilities }: CardProps) => {
  const theme = useTheme();
  const router = useRouter();
  const darkMode = useDarkMode();

  function handleClick() {
    router.push(`/pokemon/${name}`);
  }

  return (
    <CardContainer darkMode={darkMode}>
      <ImageWrapper darkMode={darkMode} onClick={handleClick}>
        <Image
          src={image || defaultPokemonImage}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          object-fit="cover"
          alt={name}
        />
      </ImageWrapper>
      <Typography
        marginTop={20}
        marginBottom={25}
        fontSize={25}
        font="bold"
        textTransform="capitalize"
      >
        {name}
      </Typography>
      <ContentRow>
        <Typography font="bold">Height</Typography>
        <Typography>{height}</Typography>
      </ContentRow>
      <ContentRow marginTop={5}>
        <Typography font="bold">Weight</Typography>

        <Typography>{weight}</Typography>
      </ContentRow>
      <ContentRow marginTop={5}>
        <Typography font="bold">Abilities</Typography>

        <AbilitiesWrapper>
          {abilities.map((value) => (
            <Typography key={value} textTransform="capitalize">
              {value}
            </Typography>
          ))}
        </AbilitiesWrapper>
      </ContentRow>

      <Separator />

      <DetailsButton darkMode={darkMode} onClick={handleClick}>
        <Typography
          fontSize={18}
          font="bold"
          color={darkMode ? theme.colors.white : theme.colors.blue}
        >
          See Details
        </Typography>
      </DetailsButton>
    </CardContainer>
  );
};

export default Card;
