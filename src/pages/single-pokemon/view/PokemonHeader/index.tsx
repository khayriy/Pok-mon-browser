type Props = {
  name: string;
  id: number;
  colorClass: string;
};

const PokemonHeader = ({ name, id, colorClass }: Props) => (
  <div className={`${colorClass} text-white text-center py-8`}>
    <h1 className="text-4xl font-bold capitalize mb-2">{name}</h1>
    <p className="text-xl font-medium opacity-90">#{id.toString().padStart(3, '0')}</p>
  </div>
);

export default PokemonHeader;
