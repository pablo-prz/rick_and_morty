import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";


function Detail () {
   const { id } = useParams();
   const [character, setCharacter] = useState( { } );

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
     <div className={style.card}>
       <h1 className={style.titles}>Nombre:</h1>
       <h2 className={style.text}>{character?.name}</h2>
       <h1 className={style.titles}>Status:</h1>
       <h2 className={style.text}> {character?.status}</h2>
       <h1 className={style.titles}>Specie:</h1>
       <h2 className={style.text}> {character?.species}</h2>
       <h1 className={style.titles}>Gender:</h1>
       <h2 className={style.text}>{character?.gender}</h2>
       <h1 className={style.titles}>Origin:</h1>
       <h2 className={style.text}> {character?.origin?.name}</h2>
       <img
         className={style.imag}
         src={character?.image}
         alt={character?.name}
       ></img>
     </div>
   );
   }

   export default Detail;