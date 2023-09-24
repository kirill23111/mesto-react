import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ onClose, isOpen, currentUser }) => {
  const refInput = useRef(null);

  useEffect(() => {
    if (isOpen && currentUser) {
      refInput.current.value = currentUser.avatar;
    } else {
      refInput.current.value = ""; // Обнуляем значение при закрытии попапа
    }
  }, [isOpen, currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
  }

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
      <span className="popup__input-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;