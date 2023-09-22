import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ onClose, onAddPlace }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    link: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(formValues);
  }

  return (
    <PopupWithForm
      name="newcard"
      title="Новое место2"
      btnText="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__info popup__info_type_name-image"
        minLength="2"
        maxLength="30"
        id="title-input"
        type="text"
        name="name"
        placeholder="Название"
        required
        value={formValues.name}
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          })
        }
      />
      <span className="popup__input-eror mesto-error"></span>
      <input
        className="popup__input popup__info popup__info_type_image"
        id="link-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={formValues.link}
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          })
        }
      />
      <span className="popup__input-eror mesto-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
