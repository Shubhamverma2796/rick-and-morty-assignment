import './Card.css'

function Card({name,species,image}) {
    return (
    <div>
        <img className="card-img" src={image} />
        <h4>{name}</h4>
        <h4>{species}</h4>
    </div>
    )
}

export default Card;
