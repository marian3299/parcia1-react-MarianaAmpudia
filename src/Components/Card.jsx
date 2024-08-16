const Card = ({name, game}) => {
  return (
    <div className="cardContainer">
      <h4>Hola {name}!</h4>
      <h4>Sabmeos que tu videojuego favorito es: </h4>
      <h3>{game}</h3>
    </div>
  )
}

export default Card