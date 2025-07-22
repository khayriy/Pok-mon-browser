import { Suspense } from 'react';
import Skeleton from '../../../../components/skeleton';
import { lazy } from 'react';

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

const PokemeonList = ({ isLoading, pokemons }: Props) => {
  const skeletons = Array(8).fill(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {isLoading && pokemons.length === 0
        ? skeletons.map((_, index) => <Skeleton key={index} />)
        : pokemons.map((pokemon) => (
            <Suspense fallback={<Skeleton />} key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
              />
            </Suspense>
          ))}
    </div>
  );
};

export default PokemeonList;
