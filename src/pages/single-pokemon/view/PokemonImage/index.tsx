type Props = {
  imageUrl: string | null;
  name: string;
  height: number;
  weight: number;
  type: string;
};



const PokemonImage = ({ imageUrl, name, height, weight, type }: Props) => (
  <div className="bg-gray-50 flex flex-col items-center justify-center p-6 sm:p-8 relative">
    <div className="w-60 h-60 sm:w-80 sm:h-80 flex items-center justify-center">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-full h-full object-contain drop-shadow-lg" />
      )}
    </div>

    <span className="mt-6 px-6 py-2 rounded-full bg-black/70 text-white text-lg font-bold capitalize shadow-lg">
      {type}
    </span>

    <div className="flex gap-12 mt-6">
      <div className="text-center">
        <div className="text-gray-500 text-sm mb-1">📏 Height</div>
        <div className="font-bold text-lg">{(height / 10).toFixed(1)} m</div>
      </div>
      <div className="text-center">
        <div className="text-gray-500 text-sm mb-1">⚖️ Weight</div>
        <div className="font-bold text-lg">{(weight / 10).toFixed(1)} kg</div>
      </div>
    </div>
  </div>
);

export default PokemonImage;
