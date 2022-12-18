import React from 'react';

export enum CardVariant {
  Outline = 'outlined',
  Primary = 'primary',
  Ellips = 'ellips',
}

interface CardProps {
  width?: string;
  height?: string;
  variant?: CardVariant;
  padding?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  padding,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border:
          variant === CardVariant.Outline || variant === CardVariant.Ellips
            ? '1px gray solid'
            : '',
        background: variant === CardVariant.Primary ? 'lightgrey' : '',
        borderRadius: variant === CardVariant.Ellips ? '20px' : '',
        padding,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
