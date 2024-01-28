import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import CardList from "./Components/CardList";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetch daa ");
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="searchBox">
        <input
          value={filter}
          type="text"
          placeholder="filter by name"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="container">
        <CardList characters={filteredCharacters} />
      </div>
    </div>
  );
}

export default App;
