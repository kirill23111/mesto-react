import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import ImagePopup from "../components/ImagePopup.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import AddPlacePopup from "../components/AddPlacePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(items) {
    api
      .updateUserInfo(items)
      .then((user) => {
        setCurrentUser(user);
        document.querySelector(".edit-popup").classList.remove("popup_opened");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(item) {
    api
      .updateUserAvatar(item)
      .then((user) => {
        setCurrentUser(user);
        document.querySelector(".popup-avatar").classList.remove("popup_opened");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(items) {
    api
      .createCard(items)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        document.querySelector(".newcard").classList.remove("popup_opened");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    document.querySelector(".popup-avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".edit-popup").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".newcard").classList.add("popup_opened");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    document.querySelector(".popup-avatar").classList.remove("popup_opened");
    document.querySelector(".edit-popup").classList.remove("popup_opened");
    document.querySelector(".newcard").classList.remove("popup_opened");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
        />
        <AddPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
