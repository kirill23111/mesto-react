function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup image-popup ${isOpen ? "popup_opened" : ""}`}>
      <figure className="popup-full__container">
        <img className="popup-full__image" src={card?.link} alt={card?.name} />
        <h2 className="popup-full__title">{card?.name}</h2>
        <button
          type="button"
          className="popup__close popup-full__close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
