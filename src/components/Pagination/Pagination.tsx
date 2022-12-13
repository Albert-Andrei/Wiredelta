import Typography from '@components/Typography';
import { useDarkMode } from '@contexts/ThemeContext';
import { useTheme } from 'styled-components';
import {
  IndicatorWrapper,
  PageContainer,
  PaginationWrapper,
} from './Pagination.styles';

interface PaginationProps {
  pages: number;
  currentPage: number;
  onNext: () => void;
  onBack: () => void;
}

const Pagination = ({
  pages,
  currentPage,
  onBack,
  onNext,
}: PaginationProps) => {
  const theme = useTheme();
  const darkMode = useDarkMode();
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < pages;

  return (
    <PaginationWrapper>
      <IndicatorWrapper active={hasPrevious} onClick={onBack}>
        <Typography
          color={
            darkMode
              ? theme.colors.white
              : hasPrevious
              ? theme.colors.blue
              : theme.default.fontColor
          }
        >
          Previous page
        </Typography>
      </IndicatorWrapper>
      <PageContainer>
        <Typography>
          {currentPage} / {pages}
        </Typography>
      </PageContainer>
      <IndicatorWrapper active={hasNext} onClick={onNext}>
        <Typography
          color={
            darkMode
              ? theme.colors.white
              : hasNext
              ? theme.colors.blue
              : theme.default.fontColor
          }
        >
          Next page
        </Typography>
      </IndicatorWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
