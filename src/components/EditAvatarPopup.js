import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({  onClose, isOpen }) => {
  const refInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    refInput.current.value = "";
  }, []);

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="popup-avatar"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="link-avatar"
        className="popup__input popup__input_type_avatar-link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required
        ref={refInput}
      />
      <span className="popup__input-eror"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
