import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeasonalAnime, setSelectedAnime } from "../store/animeSlice";
import { FaTv } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const AnimeInfo=()=> {
 const dispatch = useDispatch();
 const { animeList, selectedAnime, loading } = useSelector((state)=> state.anime);

 useEffect(()=>{
    dispatch(fetchSeasonalAnime());
 },[dispatch]);

 if(loading) return <p className="text-center text-lg mt-10">Loading...</p>

 return (
   <div id="animelist" className="min-h-screen bg-gray-50 p-6">

     <h1 className="text-3xl font-bold text-black text-center mb-8">
       Anime Dashboard
     </h1>

     <div className="flex gap-6">

     
       <div className="w-1/3 bg-white shadow-lg rounded-xl p-4 overflow-y-auto max-h-[90vh]">

         <h2 className="text-2xl font-bold text-grey-500 mb-4 flex items-center gap-2">
           <FaStar className="text-yellow-400"/>Top 10 This Season
         </h2>

         <ul className="space-y-3">
           {animeList.map((anime,index)=>(
             <li key={anime.mal_id}
               onClick={()=> dispatch(setSelectedAnime(anime))}
               className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                 selectedAnime?.mal_id === anime.mal_id ? "bg-blue-50" : "hover:bg-gray-100"
               }`}
             >
               <img
                 src={anime.images.jpg.image_url}
                 alt={anime.title}
                 className="w-12 h-16 object-cover rounded"
               />
               <div className="flex-1">
                 <p className="font-semibold">{index+1}. {anime.title}</p>
                 <p className="text-sm text-gray-500 italic">{anime.title_english || anime.title_japanese}</p>
                 <p className="text-sm flex items-center text-yellow-600"><FaStar className="text-yellow-400"/> {anime.score ?? "N/A"}</p>
               </div>
             </li>
           ))}
         </ul>

       </div>

       <div className="flex-1 space-y-6">

         {selectedAnime && (
           <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">

             <img
               src={selectedAnime.images.jpg.large_image_url}
               alt={selectedAnime.title}
               className="w-full md:w-60 h-80 object-cover rounded-lg shadow-md"
             />

             <div className="flex-1 flex flex-col">
               <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedAnime.title}</h2>
               <p className="text-gray-600 text-sm mb-4">{selectedAnime.title_english || selectedAnime.title_japanese}</p>
               <p className="text-gray-700 mb-4 leading-relaxed">{selectedAnime.synopsis || "No description available."}</p>

               <div className="mt-auto text-sm text-gray-500 space-y-1">
                 <p className="flex items-center gap-2"><FaTv /> Episodes: {selectedAnime.episodes ?? "?"}</p>
                 <p className="flex items-center gap-2 "><FaStar className="text-yellow-400"/> Score: {selectedAnime.score ?? "N/A"}</p>
                 <p className="flex items-center gap-2"><FaCalendarAlt className="text-blue-600"/> Aired: {selectedAnime.aired?.string || "Unknown"}</p>
               </div>

             </div>

           </div>
         )}

       </div>

     </div>
 <div className="mt-5 text-center text-4xl uppercase leading-[0.8]">
            <br />
            <br />
            <br />
            <b>C</b>OME <b>B</b>ACK <b>L</b>ATER <br /><br />
            <b>F</b>OR <b>M</b>ORE <b>A</b>NIME <b>I</b>NFO
          </div>
   </div>
 );
}

export default AnimeInfo