import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
0% {
  background-position: -200px 0;
}
100% {
  background-position: calc(200px + 100%) 0;
}
`;

export const CardSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  box-shadow: 0px 2px 10px ${({ theme }) => theme.default.shadow};
  padding: 30px;
`;

export const ProductSkeleton = styled.div<{
  width?: string;
  height?: string;
  marginTop?: string;
}>`
  display: inline-block;
  height: ${(props) => props.height || '14px'};
  width: ${(props) => props.width || '80%'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const PictureSkeleton = styled(ProductSkeleton)`
  width: 100%;
  height: 280px;
  display: block;
  border-radius: 20px;
`;
