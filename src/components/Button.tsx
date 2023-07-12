
import React, { FC, MouseEvent, CSSProperties } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, style, children }) => {
  return (
    <button className='button' onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;