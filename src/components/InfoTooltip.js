import React from 'react'

function InfoTooltip({ onClose, isOpen, message }) {
    return (
      <div className={`popup image-popup ${isOpen ? "popup_opened" : ""}`}>
        <figure className="popup-full__container">
            <img className="popup-full__registr-image"/>
          <h2 className="popup-full__title">Вы успешно зарегистрировались!</h2>
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

export default InfoTooltip