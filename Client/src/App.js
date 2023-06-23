import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const { pathname } = useLocation();

  const [access, setAccess] = useState(false);

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.id < 801) {
        if (characters.some((chara) => chara.id === data.id)) {
          return;
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;

      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
