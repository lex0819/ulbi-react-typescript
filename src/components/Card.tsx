import React, { useState } from 'react';

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
  onClick: (num: number) => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  padding,
  onClick,
  children,
}) => {
  const [num, setNum] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border:
          variant === CardVariant.Outline || variant === CardVariant.Ellips
            ? '1px gray solid'
            : '',
        backgroundColor: variant === CardVariant.Primary ? 'lightgrey' : '',
        borderRadius: variant === CardVariant.Ellips ? '20px' : '',
        padding,
      }}
      onClick={() => onClick(num)}
    >
      {children}
    </div>
  );
};

export default Card;
