export const initialCards = [
  {
    name: "Индонезия",
    link: "https://images.unsplash.com/photo-1610036615605-636de68a306e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
  {
    name: "Вайоминг",
    link: "https://images.unsplash.com/photo-1594376425830-449d2b7572d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
  {
    name: "Коста-Рика",
    link: "https://images.unsplash.com/photo-1643400813506-8f2a366737f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
  {
    name: "Аберфойл",
    link: "https://images.unsplash.com/photo-1638627783968-42621c4f28cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
  {
    name: "Аберфойл",
    link: "https://images.unsplash.com/photo-1638627783803-e67903259f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
  {
    name: "Португалия",
    link: "https://images.unsplash.com/photo-1575373350254-9ab842370a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    likes: [],
    owner: {id: '6360367f98e68f0e65ed813d'}
  },
];

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
