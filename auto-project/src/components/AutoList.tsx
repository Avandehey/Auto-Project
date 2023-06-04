import AutoCard from './AutoCard';

interface AutoListProps {
  autos: {
    id: string;
    name: string;
    year: number;
  }[];
}

const AutoList: React.FC<AutoListProps> = ({ autos }) => {
  return (
    <div>
      {autos.map((auto) => (
        <AutoCard key={auto.id} {...auto} />
      ))}
    </div>
  );
};

export default AutoList;
