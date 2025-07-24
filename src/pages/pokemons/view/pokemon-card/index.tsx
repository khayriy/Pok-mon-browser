// components/PokemonCard.tsx
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  id?: string;
  image?: string;
}

const PokemonCard: React.FC<Props> = ({ name, id, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(
         `/pokemon/${id}`,
       
      );
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square relative bg-gray-100">
        <img
          src={
            image ||
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="font-semibold capitalize text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">#{id}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
