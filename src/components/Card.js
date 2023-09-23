function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        className="element__image"
        id="image"
        src={card?.link}
        alt={card?.name}
        onClick={handleClick}
      />
      <div className="element__line">
        <h2 className="element__name">{card?.name}</h2>
        <div>
          <button
            type="button"
            className="element__like"
          ></button>
          <span className="element__like_number">{card?.likes?.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
