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
  avatar,
  popupOpenAdd,
  addElement,
  popupOpenAvatar,
  avatarElement

} from "../components/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { data } from "autoprefixer";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

let userId 

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: 'd16a7168-0b2c-4cf6-9bf2-d4242b721c9e',
    'Content-Type': 'application/json'
  }
});

 api.getInfo()
 .then(res => {
  userInfo.setUserInfo({'name':res.name,
                        'about': res.about});
  userInfo.setUserAvatar({avatar: res.avatar})    
  userId = res._id                 
 })
 .catch((err) => {
  console.log(err); // выведем ошибку в консоль
}); 

 api.getCards()
 .then(cardList => {
  cardList.forEach(data =>{
const card = createCard(data)
    section.addItem(card)
  })
 })
 .catch((err) => {
  console.log(err); // выведем ошибку в консоль
}); 

const formValidators = {};

// Валидация
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

const userInfo = new UserInfo({
  profileName: firstname,
  profileJob: profession,
  profileAvatar: avatar,
});
const popupEditInfo = new PopupWithForm(".popup_type_edit", {
  formCallback: (data) => {
    popupEditInfo.showLoading(true);
    api.editProfile(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
.finally(() => {
  popupEditInfo.close();
  popupEditInfo.showLoading(false);
})
 },
});

popupEditInfo.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_add", {
  formCallback: (data) => {
    const item = {
     name: data.description,
      link: data.url,
    }
    popupAddCard.showLoading(true);
      api.addCard(item)
      .then ((res) =>{
        section.addItem(createCard(res))
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupAddCard.close();
        popupAddCard.showLoading(false);
      })
 },
});
popupAddCard.setEventListeners();



//  Открытие формы добавления
popupOpenAdd.addEventListener("click", function () {
  formValidators[addElement.name].cleanForm();
  popupAddCard.open();
});



const popupAvatar = new PopupWithForm ('.popup_type_avatar', {
  formCallback : (data) => {
    popupAvatar.showLoading(true);
    api.editAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupAvatar.showLoading(false);
      popupAvatar.close();
    })
  }
});

popupAvatar.setEventListeners();

//Открытие формы для смены аватара
popupOpenAvatar.addEventListener('click', function () {  
  formValidators[avatarElement.name].cleanForm();
  popupAvatar.open();
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

const popupWithConfirm = new  PopupWithConfirmation('.popup_type_confirm', () => {
  
});
popupWithConfirm.setEventListeners()
const createCard = (item) => {
  const card = new Card(
    item.name,
    item.link,
    item.likes,
    item._id,
    userId,
    item.owner._id,
    "#card-template",
    handleCardClick,
    (id) => {
      popupWithConfirm.open()
      popupWithConfirm.submitHandler(() => {
        api.deleteCard(id)
        .then(res => {
          card._handleDeleteClick()
         popupWithConfirm.close()
        })
      })
    },
    (id) => {
      if(card.isLiked()){
        api.deleteLike(id)
        .then(res =>{
          card.setLike(res.likes)
        })
      } else {
        api.setLike(id)
        .then(res =>{
          card.setLike(res.likes)
        
        })
      }
   
    }
    
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

