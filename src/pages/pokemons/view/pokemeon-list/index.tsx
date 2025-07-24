import { Suspense, lazy } from 'react';
import Skeleton from '../../../../components/skeleton';

const PokemonCard = lazy(() => import('../pokemon-card'));

interface Pokemon {
  name: string;
  id: string;
  url: string;
}

interface Props {
  isLoading: boolean;
  pokemons: Pokemon[];
}

const PokemonList = ({ isLoading, pokemons }: Props) => {
  const skeletons = Array(8).fill(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
      {isLoading && pokemons.length === 0
        ? skeletons.map((_, index) => <Skeleton key={index} />)
        : pokemons.map((pokemon) => (
            <Suspense fallback={<Skeleton />} key={pokemon.id}>
              <PokemonCard name={pokemon.name} id={pokemon.id} />
            </Suspense>
          ))}
    </div>
  );
};

export default PokemonList;
