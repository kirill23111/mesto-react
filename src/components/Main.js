import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import Card from "./Card";

function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const user = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <img src={user?.avatar} alt={user?.name} className="profile__image" />
        <button
          class="profile__image profile__image_button"
          alt="профиль"
          onClick={onEditAvatar}
        ></button>
        <div class="profile__info">
          <h1 class="profile__title">{user?.name}</h1>
          <h2 class="profile__paragraph">{user?.about}</h2>
          <button
            onClick={onEditProfile}
            class="profile__edit-button"
            type="button"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          class="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
