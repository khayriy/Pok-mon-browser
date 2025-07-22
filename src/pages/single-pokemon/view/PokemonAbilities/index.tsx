type Ability = {
  ability: { name: string };
  is_hidden: boolean;
};

const PokemonAbilities = ({ abilities }: { abilities: Ability[] }) => (
  <div>
    <h3 className="font-bold text-2xl mb-4 text-gray-800">Abilities</h3>
    <div className="space-y-3">
      {abilities.map(({ ability, is_hidden }, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
        >
          <span className="capitalize font-medium text-gray-800 text-lg">
            {ability.name.replace('-', ' ')}
          </span>
          {is_hidden && (
            <span className="text-sm bg-gray-300 text-gray-700 px-3 py-1 rounded-full font-medium">
              Hidden
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default PokemonAbilities;
