
export const config = {
  inputSelector: "popup__input",
  submitButtonSelector: "popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

export const popupOpenEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_edit");
export const popupOpenAvatar = document.querySelector('.profile__avatar-button');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const avatarElement = popupAvatar.querySelector('.popup__avatar-form');



export const formProfileElement = popupEdit.querySelector(".popup__edit-form"); 
export const nameInput = popupEdit.querySelector(".popup__input_type_name"); 
export const jobInput = popupEdit.querySelector(".popup__input_type_text");

export const firstname = ".profile__name";
export const profession = ".profile__about";
export const avatar = '.profile__avatar';


export const popupAdd = document.querySelector(".popup_type_add");
export const popupOpenAdd = document.querySelector(".profile__add-button");
export const addElement = popupAdd.querySelector(".popup__add-form");

export const popupView = document.querySelector(".popup_type_view");
