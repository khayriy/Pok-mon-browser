type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const PokemonStats = ({ stats }: { stats: Stat[] }) => (
  <div>
    <h3 className="font-bold text-2xl mb-6 text-gray-800">Base Stats</h3>
    <div className="space-y-4">
      {stats.map(({ stat, base_stat }) => (
        <div key={stat.name} className="flex items-center">
          <div className="w-24 text-sm font-bold text-gray-700">{stat.name}</div>
          <div className="w-12 text-right text-lg font-bold text-gray-800">{base_stat}</div>
          <div className="flex-1 ml-6">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gray-800 transition-all duration-700 ease-out"
                style={{ width: `${Math.min((base_stat / 200) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PokemonStats;
