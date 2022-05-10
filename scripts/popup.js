const popupOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseEdit = popupEdit.querySelector('.popup__close-button');
const formElement = popupEdit.querySelector('.popup__edit-form');// Воспользйтесь методом querySelector()
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

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup){
  popup.classList.remove('popup_opened')
}

//Открытие формы добавления
closeAdd.addEventListener('click', function( ){
  closePopup(popupAdd);  
 });


popupAdd.addEventListener('click', function( event ){
 if (event.target == event.currentTarget) {
  closePopup(popupAdd);   
 } 
});

popupOpenAdd.addEventListener('click', function( event ){
 openPopup(popupAdd);
 });
 

 //  Открытие формы редактирования

popupOpenEdit.addEventListener('click', function( event ){
nameInput.value  =  firstname.textContent;
jobInput.value  =  profession.textContent;
 openPopup(popupEdit)
});

popupCloseEdit.addEventListener('click', function( event ){
  closePopup(popupEdit);  
 });

popupEdit.addEventListener('click', function( event ){
  if (event.target == event.currentTarget) {
  closePopup(popupEdit); 
  } 
});   


// Находим форму в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerEdit (evt) {
    evt.preventDefault();                                              
    firstname.textContent = nameInput.value;
    profession.textContent = jobInput.value;
    closePopup(popupEdit);
   
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandlerEdit);

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.elements');

const closeViewPopup = () => {
 closePopup(popupView)
}


const handleDeleteClick = (evt) => {
  evt.target.closest('.element').remove();
};
const handleLikeClick = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};

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


closeView.addEventListener('click', () => closePopup(popupView));

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
 
  function renderCard (cards, card, prepend) {
    if(prepend) {
      cards.prepend(card);
    } else{
      cards.append(card);
    }
  }

  function createCards (name,link) {
    const card = cardTemplate.querySelector('.element').cloneNode(true);
    card.querySelector('.element__text').textContent = name;
    const image = card.querySelector('.element__image');
    image.src = link;
    image.alt = `Фото ${name}.`;
    const deleteBtn = card.querySelector('.element__trash-button');
    const likeButton = card.querySelector('.element__like-button');
    likeButton.addEventListener('click', handleLikeClick);
    deleteBtn.addEventListener('click', handleDeleteClick);
    image.addEventListener('click', handleImageClick);
    return card;
  }

  initialCards.forEach((icon) => {
  const name = icon.name
  const link = icon.link
  const card = createCards(name, link)
  renderCard(cardsList, card, false)
  });

 
 

 function formSubmitAdd (evt) {
  evt.preventDefault(); 
  const src = cardLink.value;
  const alt = cardName.value;
  const card = createCards(alt, src);
  renderCard(cardsList, card, true);
  addElement.reset();
  closePopup(popupAdd);

}

addElement.addEventListener('submit',formSubmitAdd);





