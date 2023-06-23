
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../Redux/Actions";
import { useState } from "react";
import Card from "../Card/Card";
import style from "./Favorite.module.css"
const Favorites = ({onClose}) => {

    const favorites = useSelector((state) => state.myFavorites)

    const [aux, setAux] = useState (false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));  
            setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
    <div>
        <select className={style.order} onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select className={style.filter} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters" >allCharacters</option>
        </select>
        <div className={style.container} >
        {
            
            favorites.map(( {id, name, species, gender, image} ) => {
                return(
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image}
                            onClose={onClose}
                        />
                    )
            })
        }
        </div>
    </div>
    );
};  


export default Favorites;