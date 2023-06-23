import style from "./Cards.module.css"
import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {
   
   return(
      <div className={style.container}>
         {
            characters.map(({id, name, species, gender, image}) => {
               return(
                     <Card
                        key={id}
                        id={id}
                        image={image}
                        name={name}
                        species={species}
                        gender={gender}
                        onClose={onClose}
                        />
                     )
               })
         }
      </div>
   )
}
