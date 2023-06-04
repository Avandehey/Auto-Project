import React from 'react';

export interface AutoCardProp {
  id: string;
  name: string;
  year: number;
}

const AutoCard: React.FC<AutoCardProp> = (props: AutoCardProp) => {
  const { name, year } = props;

  const [brand, model] = name.split(' ');

  return (
    <div>
      <h1>Brand: {brand}</h1>
      <h2>Model: {model}</h2>
      <h3>Year: {year}</h3>
    </div>
  );
};

export default AutoCard;