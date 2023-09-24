import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ onClose, isOpen, currentUser }) => {
  const refInput = useRef(null);
  const [avatarLink, setAvatarLink] = useState('');
  const [initialAvatarLink, setInitialAvatarLink] = useState('');

  useEffect(() => {
    if (isOpen && currentUser) {
      setAvatarLink(currentUser.avatar);
      setInitialAvatarLink(currentUser.avatar);
    }
  }, [isOpen, currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    // Handle avatar link submission here
  }

  function handleCancel() {
    setAvatarLink(initialAvatarLink);
    onClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="popup-avatar"
      onClose={handleCancel}
      onSubmit={handleSubmit}
    >
      <input
        id="link-avatar"
        className="popup__input popup__input_type_avatar-link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required
        value={avatarLink}
        onChange={(e) => setAvatarLink(e.target.value)}
        ref={refInput}
      />
      <span className="popup__input-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;