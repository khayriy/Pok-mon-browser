interface Props {
  name: string;
  number?: string;
  image?: string;
  onClick?: () => void;
}

const PokemonCard: React.FC<Props> = ({ name, number, image, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
    <div className="aspect-square relative bg-gray-100">
      <img 
        src={image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
        alt={name} 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="text-center mt-2">
      <h3 className="font-semibold capitalize text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">#{number}</p>
    </div>
  </div>
);

export default PokemonCard;
