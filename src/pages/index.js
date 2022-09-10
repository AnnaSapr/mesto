import "./index.css";
import {
  config,
  initialCards,
  popupOpenEdit,
  formProfileElement,
  nameInput,
  jobInput,
  firstname,
  profession,
  popupOpenAdd,
  addElement,
} from "../components/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
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
const popupEditInfo = new PopupWithForm(".popup_type_edit", {
  formCallback: (data) => {
    userInfo.setUserInfo(data);

    popupEditInfo.close();
  },
});
popupEditInfo.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_add", {
  formCallback: (data) => {
    const item = {
      name: data.description,
      link: data.url,
    };
    section.addItem(createCard(item));
    popupAddCard.close();
  },
});
popupAddCard.setEventListeners();

//  Открытие формы добавления
popupOpenAdd.addEventListener("click", function () {
  formValidators[addElement.name].cleanForm();
  popupAddCard.open();
});

//  Открытие формы редактирования

popupOpenEdit.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  formValidators[formProfileElement.name].cleanForm();

  popupEditInfo.open();
});

const popupWithImage = new PopupWithImage(".popup_type_view");
popupWithImage.setEventListeners();

const handleCardClick = (name,link) => {
  const data = {
    image: link,
    text: name
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

