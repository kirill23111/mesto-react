import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ onClose, isOpen }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    link: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        name: "",
        link: "",
      });
    }
  }, [isOpen]);
  
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <PopupWithForm
      name="newcard"
      title="Новое место"
      btnText="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
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
        onChange={handleChange}
      />
      <span className="popup__input-error mesto-error"></span>
      <input
        className="popup__input popup__info popup__info_type_image"
        id="link-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={formValues.link}
        onChange={handleChange}
      />
      <span className="popup__input-error mesto-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
