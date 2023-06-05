import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   const email = "perezpablo0903@gmail.com";

   const password = "potis2";

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([ ]);

   const {pathname} = useLocation();

   const [access, setAccess] = useState(false);

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   useEffect(() => {
      !access && navigate("/");
   }, [access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if(characters.some(chara=>chara.id === data.id)){ return;}
            else {setCharacters((oldChars) => [...oldChars, data]);}
            }
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const login = (userData) => {
      if( userData.email === email  && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }
      
   return (
      <div>
         {pathname !== "/" && <Nav onSearch={onSearch}/>}
         <Routes>
         <Route path='/' element={<Form login={login}/>}/>  
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Detail/:id' element={<Detail/>}/>
         <Route path='/Favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
      </div>
   );
}

export default App;
