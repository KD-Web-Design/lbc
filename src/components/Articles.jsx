import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import SaveSearchButton from "./SaveSearchButton";
import Pagination from "./Pagination";

export default function Articles() {

    const [images, setImages] = useState([]);
    const ACCESS_KEY = 'eod3WDvtFe3xywUZpqtcIpsGcrY_oY-SBWYJ4akaNFU'; // Remplace par ton Access Key
  
    useEffect(() => {
      fetch(`https://api.unsplash.com/search/photos?query=car&orientation=landscape&per_page=50&client_id=${ACCESS_KEY}`)
        .then(response => response.json())
        .then(data => {
          setImages(data.results);
        })
        .catch(error => {
          console.error('Erreur:', error);
        });
    }, []);
    

  return (
    <>
    <div className="w-full lg:max-w-[1000px] flex flex-col gap-2  p-2 mx-auto">
        <h1 className="text-xl font-semibold">Annonces Voitures d'occasion : Paris (75) </h1>
        <span className="text-slate-500 font-semibold">10 607 annonces</span>

    
        {images.map((image) => (
        <div key={image.id} className="flex flex-col md:flex-row overflow-hidden cursor-pointer relative">
            <div className="relative">
              <img src={image.urls.regular} alt={image.alt_description} className="w-full h-52 md:w-[300px] md:h-[200px] object-cover rounded-lg my-2" />
              <HeartIcon className="w-8 absolute top-5 right-3 bg-slate-200 rounded-full p-2 hover:bg-slate-300" />
            </div>
            <div className="flex flex-col ml-5">
              <h2 className="text-lg font-semibold">Titre</h2>
              <h2 className="text-lg font-semibold">Prix</h2>
              <span className="bg-slate-200 rounded-2xl px-2 py-1 text-xs font-semibold w-fit">Paiment sécurisé</span>
              <span>Descro</span>
              <span className="text-sm text-slate-500 mb-4 md:mt-20">Lieu</span>
            </div>
        </div>
        ))}

      
      <SaveSearchButton />
      <Pagination />
    </div>
    <p>test</p>

    </>
  )
}
