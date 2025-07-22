import PokemonCard from '../pokemon-card';
import Skeleton from '../../../components/skeleton';

interface Pokemon {
  name: string;
  id: string;
  url: string;
}

interface Props {
  isLoading: boolean;
  pokemons: Pokemon[];
}

const PokemeonList = ({ isLoading, pokemons }: Props) => {
  const skeletons = Array(8).fill(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {isLoading
        ? skeletons.map((_, index) => <Skeleton key={index} />)
        : pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              number={pokemon.id}
            />
          ))}
    </div>
  );
};



export default PokemeonList;
