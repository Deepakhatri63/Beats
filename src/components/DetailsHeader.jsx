import { Link } from "react-router-dom";


const DetailsHeader = ({ artistId, artistData, songData }) => (
    <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28">
            <div className="absolute inset-0 flex items-center">
                <img 
                   alt="art"
                   src={artistId ? artistData?.artists[artistId].songData?.shazam-songs?.attributes?.images?.coverArt?.url.replace('{w}','500').replace('{h}','500')
                    : songData?.resources?.['shazam-songs']?.attributes?.images?.coverart
            }
                   />
            </div>
        </div>
    </div>
);

export default DetailsHeader;

