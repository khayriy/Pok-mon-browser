import { useParams } from "react-router-dom";
import usePokemonDetails from "./useSinglePokemon";
import { getTypeColor } from "./helpers";
import PokemonHeader from "./view/PokemonHeader";
import PokemonImage from "./view/PokemonImage";
import PokemonStats from "./view/PokemonStats";
import PokemonAbilities from "./view/PokemonAbilities";
import Skeleton from "../../components/skeleton";

const SinglePokemon = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: pokemon,
    isLoading,
    isError,
    navigateToList,
  } = usePokemonDetails(id || "1");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => {
          return <Skeleton key={index} />;
        })}
      </div>
    );
  }

  if (isError || !pokemon) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error loading Pokémon details
        </div>
      </div>
    );
  }

  const primaryType = pokemon.types[0]?.type.name || "normal";
  const typeColorClass = getTypeColor(primaryType);

  return (
    <div className="min-h-screen w-full p-4">
      <div className="mb-4 max-w-6xl mx-auto">
        <button
          onClick={navigateToList}
          className="flex items-center border bg-white text-gray-600 hover:text-gray-800 font-medium"
        >
          <span className="mr-2 text-lg">←</span> Back to List
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <PokemonHeader
          name={pokemon.name}
          id={pokemon.id}
          colorClass={typeColorClass}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <PokemonImage
            name={pokemon.name}
            imageUrl={
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              pokemon.sprites?.front_default
            }
            height={pokemon.height}
            weight={pokemon.weight}
            type={primaryType}
          />
          <div className="p-4 sm:p-6 md:p-8 space-y-8">
            <PokemonStats stats={pokemon.stats} />
            <PokemonAbilities abilities={pokemon.abilities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
