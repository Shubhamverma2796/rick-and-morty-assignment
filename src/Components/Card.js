import "./Card.css";

function Card({ name, species, image, gender }) {
  return (
    <div>
      <img className="card-img" src={image} />
      <h4>{name}</h4>
      <div className="meta-data">
        <span>{species}</span>
        <span>{gender}</span>
      </div>
    </div>
  );
}

export default Card;
