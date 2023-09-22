import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ onUpdateUser, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  return (
    <div>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-popup"
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input
          className="popup__input popup__info popup__info_type_name"
          placeholder="Имя"
          type="text"
          id="profile-name"
          minLength="2"
          maxLength="40"
          name="name"
          required
          onChange={handleChangeName}
          value={name}
        />
        <span className="popup__input-eror name-error"></span>
        <input
          className="popup__input popup__info popup__info_type_job"
          placeholder="Профессия"
          type="text"
          id="job-input"
          name="job"
          minLength="2"
          maxLength="200"
          required
          onChange={handleChangeAbout}
          value={description}
        />
        <span className="popup__input-eror job-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default EditProfilePopup;
