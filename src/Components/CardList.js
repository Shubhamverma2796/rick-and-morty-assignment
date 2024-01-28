import Card from "./Card";

function CardList({ characters }) {
  return (
    <>
      {characters?.length > 0 ? (
        characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
          />
        ))
      ) : (
        <h1>No characters found</h1>
      )}
    </>
  );
}

export default CardList;
