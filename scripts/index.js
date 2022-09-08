import "../pages/index.css";
import {
  config,
  initialCards,
  popupOpenEdit,
  popupEdit,
  formProfileElement,
  nameInput,
  jobInput,
  firstname,
  profession,
  popupAdd,
  popupOpenAdd,
  addElement,
  popupView,
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import { data } from "autoprefixer";

const formValidators = {};

// Валидация
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

const userInfo = new UserInfo({
  profileName: firstname,
  profileJob: profession,
});
const PopupEdit = new PopupWithForm(popupEdit, {
  formCallback: (data) => {
    userInfo.setUserInfo(data);

    PopupEdit.close();
  },
});
PopupEdit.setEventListeners();

const PopupAdd = new PopupWithForm(popupAdd, {
  formCallback: (data) => {
    const item = {
      name: data.description,
      link: data.url,
    };
    section.addItem(createCard(item));
    addElement.reset();
    PopupAdd.close();
  },
});
PopupAdd.setEventListeners();

//  Открытие формы добавления
popupOpenAdd.addEventListener("click", function () {
  formValidators[addElement.name].cleanForm();
  PopupAdd.open();
});

//  Открытие формы редактирования

popupOpenEdit.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  formValidators[formProfileElement.name].cleanForm();

  PopupEdit.open();
});

const popupWithImage = new PopupWithImage(popupView);
popupWithImage.setEventListeners();

const handleCardClick = (evt) => {
  const data = {
    image: evt.target.src,
    text: evt.target.closest(".element").querySelector(".element__text")
      .textContent,
  };
  popupWithImage.open(data);
};

const createCard = (item) => {
  const card = new Card(
    item.name,
    item.link,
    "#card-template",
    handleCardClick
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section(
  {
    items: initialCards.reverse(),
    renderer: (data) => {
      section.addItem(createCard(data));
    },
  },
  ".elements"
);

section.renderItems();

