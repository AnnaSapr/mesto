const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

let formElement = popup.querySelector('.popup__edit-form')// Воспользйтесь методом querySelector()
let nameInput =  popup.querySelector('.popup__input_type_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = popup.querySelector('.popup__input_type_text')
let firstname = document.querySelector('.profile__name')
let profession = document.querySelector('.profile__about') /// Воспользуйтесь инструментом .querySelector()


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

