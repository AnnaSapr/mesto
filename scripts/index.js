const popupOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseEdit = popupEdit.querySelector('.popup__close-button');
const formProfileElement = popupEdit.querySelector('.popup__edit-form');// Воспользйтесь методом querySelector()
const nameInput =  popupEdit.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = popupEdit.querySelector('.popup__input_type_text');
const firstname = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__about');
const popupAdd = document.querySelector('.popup_type_add'); 
const popupOpenAdd = document.querySelector('.profile__add-button');
const closeAdd = popupAdd.querySelector('.popup__close-button');
const addElement = popupAdd.querySelector('.popup__add-form');
const cardName = popupAdd.querySelector('.popup__input_type_desription');
const cardLink  = popupAdd.querySelector('.popup__input_type_link');
const popupView = document.querySelector('.popup_type_view');
const imageView = popupView.querySelector('.popup__image');
const captionView =  popupView.querySelector('.popup__description');
const closeView = popupView.querySelector('.popup__close-button');
const saveButton = popupAdd.querySelector('.popup__save-button')
const cardsList = document.querySelector('.elements');

import {config, initialCards } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const formValidators = {};

// Валидация
Array.from(document.forms).forEach((formElement) => {
formValidators[formElement.name] = new FormValidator(config, formElement)
formValidators[formElement.name].enableValidation()
});

// Универсальная функция открытия форм
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseEsc);
  popup.addEventListener('click', handleCloseOverlay);
}

//Универсальная функция закрытия форм
function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseEsc);
  popup.removeEventListener('click', handleCloseOverlay);

}



//закрытие формы добавления
closeAdd.addEventListener('click', function( ){
  closePopup(popupAdd);  
 });




 //  Открытие формы добавления
popupOpenAdd.addEventListener('click', function( event ){
  formValidators[addElement.name].cleanForm()
 openPopup(popupAdd);
 });
 

 //  Открытие формы редактирования

popupOpenEdit.addEventListener('click', function( event ){
nameInput.value  =  firstname.textContent;
jobInput.value  =  profession.textContent;
formValidators[formProfileElement.name].cleanForm()
 openPopup(popupEdit)
});

//закрытие формы редактирования
popupCloseEdit.addEventListener('click', function( event ){
  closePopup(popupEdit);  
 });


//закрытие форм по оверлею
const handleCloseOverlay = (evt) => {
  if (evt.target == evt.currentTarget) {
    const obj = document.querySelector('.popup_opened')
    closePopup(obj)
  }
};

// Закрытие форм по ESC
 
const handleCloseEsc = (evt) =>{
  if(evt.key === 'Escape'){
   const obj = document.querySelector('.popup_opened')
   closePopup(obj)
  }
}


function formSubmitHandlerEdit (evt) {
    evt.preventDefault();                                              
    firstname.textContent = nameInput.value;
    profession.textContent = jobInput.value;
    closePopup(popupEdit);
   
}

formProfileElement.addEventListener('submit', formSubmitHandlerEdit);


closeView.addEventListener('click', () => closePopup(popupView));



function initialPopupView (name, link) {
  imageView.src = link;
  imageView.alt = name;
  captionView.textContent = name;
  
}

const openViewPopup = (name, link) => {
  initialPopupView(name, link)
  openPopup(popupView);
}


const handleImageClick = (evt) => {
  const {alt, src} = evt.target;
  openViewPopup(alt, src);
}



 
  function renderCard (cards, card, prepend) {
    if(prepend) {
      cards.prepend(card);
    } else{
      cards.append(card);
    }
  }


  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#card-template', handleImageClick);
    const cardElement = card.generateCard();
    renderCard(cardsList, cardElement, false)

  
});

//создаем новые карточки
 function formSubmitAdd (evt) {
  evt.preventDefault(); 
  const src = cardLink.value;
  const alt = cardName.value;
  const card = new Card(src, alt, '#card-template', handleImageClick);
  const cardElement = card.generateCard();
  renderCard(cardsList, cardElement, true)
  addElement.reset();
  saveButton.classList.add('popup__save-button_disabled');
  saveButton.disabled = true;
  closePopup(popupAdd);

}

addElement.addEventListener('submit',formSubmitAdd);





