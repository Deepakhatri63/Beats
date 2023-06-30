import { useNavigate } from "react-router-dom";

const ArtistCard = ({tracks}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lp cursor-pointer" onClick={() => navigate(`/artists/${tracks?.artists[0].adamid}`)}>
      <img alt="artist" src={tracks?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">{tracks?.subtitle}</p>

    </div>
  )
};

export default ArtistCard;
