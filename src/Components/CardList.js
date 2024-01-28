import { useEffect, useState } from "react";
import Card from "./Card";

function CardList() {
  const [characters, setCharacters] = useState([]);

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

  return (
    <>
      {characters?.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </>
  );
}

export default CardList;
