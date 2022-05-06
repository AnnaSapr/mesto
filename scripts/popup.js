const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup_type_edit');
const popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__edit-form')// Воспользйтесь методом querySelector()
let nameInput =  popup.querySelector('.popup__input_type_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = popup.querySelector('.popup__input_type_text')
let firstname = document.querySelector('.profile__name')
let profession = document.querySelector('.profile__about')
const popupAdd = document.querySelector('.popup_type_add') 
const popupOpenAdd = document.querySelector('.profile__add-button')
const CloseAdd = popupAdd.querySelector('.popup__close-button')
let addElement = popupAdd.querySelector('.popup__add-form')
const cardName = popupAdd.querySelector('.popup__input_type_desription')
const cardLink  = popupAdd.querySelector('.popup__input_type_link')
const popupView = document.querySelector('.popup_type_view');
const imageView = popupView.querySelector('.popup__image');
const captionView =  popupView.querySelector('.popup__description');
const closeView = popupView.querySelector('.popup__close-button');


CloseAdd.addEventListener('click', function( ){
  togglePopupAdd();  
 });


popupAdd.addEventListener('click', function( event ){
 if (event.target == event.currentTarget) {
 togglePopupAdd(); 
 } 
});

popupOpenAdd.addEventListener('click', function( event ){
 event.preventDefault();
  togglePopupAdd();
 });

 function togglePopupAdd(){
  cardName.value = '';
  cardLink.value = '';
  popupAdd.classList.toggle('popup_opened');
 }
 

 /// Воспользуйтесь инструментом .querySelector()


popupOpenButton.addEventListener('click', function( event ){
event.preventDefault();
nameInput.value  =  firstname.textContent;
jobInput.value  =  profession.textContent;
 togglePopup();
});

popupCloseButton.addEventListener('click', function( event ){
 togglePopup();  
 });

popup.addEventListener('click', function( event ){
  if (event.target == event.currentTarget) {
  togglePopup(); 
  } 
});   

function togglePopup(){
  popup.classList.toggle('popup_opened');
}
// Находим форму в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
// Получите значение полей jobInput и nameInput из свойства value// Выберите элементы, куда должны быть вставлены значения полей 
    firstname.textContent = nameInput.value;
    profession.textContent = jobInput.value;// Вставьте новые значения с помощью textContent
    togglePopup();
   
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

const cardTemplate = document.querySelector('#card-template').content;
const cards = document.querySelector('.elements');

const handleDeleteClick = (evt) => {
  evt.target.closest('.element').remove();
};
const handleLikeClick = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};

const openViewPopup = (name, link) => {
  imageView.src = link;
  imageView.alt = name;
  captionView.textContent = name;
  popupView.classList.add('popup_opened');
}


const handleImageClick = (evt) => {
  const {alt, src} = evt.target;
  openViewPopup(alt, src);
}

const closeViewPopup = () => {
  popupView.classList.remove('popup_opened');
}

closeView.addEventListener('click', closeViewPopup)

const initialCards = [
  {
  name: 'Индонезия',
  link: 'https://images.unsplash.com/photo-1610036615605-636de68a306e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
  name: 'Вайоминг',
  link: 'https://images.unsplash.com/photo-1594376425830-449d2b7572d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
  name: 'Коста-Рика',
  link: 'https://images.unsplash.com/photo-1643400813506-8f2a366737f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
  name: 'Аберфойл',
  link: 'https://images.unsplash.com/photo-1638627783968-42621c4f28cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
  name: 'Аберфойл',
  link: 'https://images.unsplash.com/photo-1638627783803-e67903259f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
  },
  {
  name: 'Португалия',
  link: 'https://images.unsplash.com/photo-1575373350254-9ab842370a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
  }
  ];
 
  initialCards.forEach((icon) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__text').textContent = icon.name;
  const image = card.querySelector('.element__image');
  image.src = icon.link;
  image.alt = `Фото ${icon.name}.`;
  const DeleteBtn = card.querySelector('.element__trash-button');
  const LikeButton = card.querySelector('.element__like-button');
  LikeButton.addEventListener('click', handleLikeClick);
  DeleteBtn.addEventListener('click', handleDeleteClick);
  image.addEventListener('click', handleImageClick);
  cards.append(card);

  });

 
 

 function formSubmitAdd (evt) {
  evt.preventDefault(); 
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__text').textContent = cardName.value;
  const image = card.querySelector('.element__image');
  image.src = cardLink.value;
  image.alt = `Фото ${cardName.value}.`;
  cards.prepend(card);
  togglePopupAdd();

}

addElement.addEventListener('submit',formSubmitAdd)





