import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

   const [Id, setId] = useState("");

   const handleChange= (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input className={style.seaBar} type='search' onChange={handleChange} value={Id}/>
         <button className={style.button} onClick={() => onSearch(Id)}>Agregar</button> 
      </div>
   );
}
