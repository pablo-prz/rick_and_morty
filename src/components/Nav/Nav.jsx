import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

function Nav ( { onSearch } ) {

        return(

        <nav className={style.container}>

            <SearchBar onSearch={onSearch}/>
        
        <button className={style.button}>
            <Link to='/About'>About</Link>
        </button>

        <button className={style.button}>
            <Link to='/Home'>Home</Link>
        </button>

        <button className={style.button}>
            <Link to='/Favorites'>Favorites</Link>
        </button>
        
        </nav>

        )
    }

//ReactDOM.render(<Nav/>, document.getElementById('root'));

export default Nav