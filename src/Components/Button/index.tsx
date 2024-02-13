import React from 'react';
import './styles.css';
interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

export function Button({ onClick }: ButtonProps) {
  return (
    <div className="Circulo" onClick={onClick}>
      <div className="Bola" />
    </div>
  );
}
