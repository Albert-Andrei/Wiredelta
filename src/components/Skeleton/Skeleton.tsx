import React from 'react';
import {
  CardSkeleton,
  PictureSkeleton,
  ProductSkeleton,
} from './Skeleton.styles';

const Skeleton = () => (
  <CardSkeleton>
    <PictureSkeleton />
    <ProductSkeleton marginTop="20px">&zwnj;</ProductSkeleton>
    <ProductSkeleton>&zwnj;</ProductSkeleton>
    <ProductSkeleton width="40%">&zwnj;</ProductSkeleton>
    <ProductSkeleton width="60%" height="24px" marginTop="70px" />
  </CardSkeleton>
);

export default Skeleton;
