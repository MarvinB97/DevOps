import { useEffect, useState } from 'react';
import './App.css';
import AppTitle from './components/AppTitle';
import AppNavBar from './components/AppNavBar';
import AppCard from './components/AppCard';

function App() {
  const [user, setUser] = useState("Bob");
  const [searchTerm, setSearchTerm] = useState("pikachu");
  const [userNames, setUserNames] = useState([]);
  const [listNames, setListNames] = useState([]);

  // Cargar los pokemones del usuario seleccionado
  useEffect(() => {
    fetch(`/${user}/info.json`)
      .then(res => res.json())
      .then(data => setListNames(data.names || []))
      .catch(err => console.error("Error cargando el JSON:", err));
  }, [user]); // ✅ solo el usuario

  // Cargar la lista de usuarios una sola vez
  useEffect(() => {
    fetch('/index.json')
      .then(res => res.json())
      .then(data => setUserNames(data.folders || []))
      .catch(err => console.error("Error cargando el JSON:", err));
  }, []);

  const handleClick = (val) => {
    setUser(val);
  };

  const handleSearch = (term) => {
    if (listNames.includes(term)) {
      console.log("Buscando:", term);
      setSearchTerm(term);
    } else {
      setSearchTerm("");
    }
  };

  return (
    <>
      <AppTitle />
      <AppNavBar
        users={userNames}
        user={user}
        onClick={handleClick}
        onSearch={handleSearch}
      />
      <AppCard pokemonName={searchTerm} />
    </>
  );
}

export default App;
