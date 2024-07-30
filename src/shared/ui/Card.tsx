import React from 'react';

interface ICardProps extends React.PropsWithChildren {}

export const Card: React.FC<ICardProps> = ({ children }) => {
  return <div className="bg-white rounded-lg p-4 w-72 h-96">{children}</div>;
};
