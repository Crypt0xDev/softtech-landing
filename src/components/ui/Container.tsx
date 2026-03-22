import React from 'react';
import type { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
