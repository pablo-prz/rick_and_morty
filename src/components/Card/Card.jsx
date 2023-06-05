import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { addFav, removeFav } from "../../Redux/Actions";
import { useState, useEffect } from "react";

function Card( {name, status, species, gender, origin, image, id, onClose, addFav, removeFav, myFavorites} ) {

   const [isFav, setIsFav] = useState(false);

   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleMouseEnter = () => {
      setShowButton(true);
   }

   const handleMouseLeave = () => {
      setShowButton(false);
   }

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }

      else {   
         setIsFav(true);
         addFav({name, species, gender, image, id, onClose});
      }
   }

   return (
     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.container}>
      {showButton && (
      <div>
       {isFav ? (
         <button className={style.buttonf} onClick={handleFavorite}>❤️</button>
       ) : (
         <button className={style.buttonf} onClick={handleFavorite}>🤍</button>
       )}
       </div>
      )}
       {showButton && (
         <button className={style.buttonc} onClick={() => onClose(id)}>
           X
         </button>
       )}

         <img src={image} />
       <Link to={`/detail/${id}`}>
         <h2 className={style.titulo}>{name}</h2>
       </Link>
       <h2 className={style.titulo}>{status}</h2>
       <h2 className={style.titulo}>{species}</h2>
       <h2 className={style.titulo}>{gender}</h2>
       <h2 className={style.titulo}>{origin}</h2>
       <h2 className={style.titulo}>{onClose}</h2>
     </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps )(Card);
