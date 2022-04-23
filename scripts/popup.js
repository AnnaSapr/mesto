const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

popupOpenButton.addEventListener('click',function(event){
event.preventDefault();
 togglePopup();
});
popupCloseButton.addEventListener('click',function(event){
 togglePopup();  
    });

popup.addEventListener('click',function(event){
  if (event.target == event.currentTarget) {
  togglePopup(); 
  } 
});   

function togglePopup(){
    popup.classList.toggle('popup__opened');
}


// Находим форму в DOM
let formElement = popup.querySelector('.popup__edit-form')// Воспользйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput =  popup.querySelector('.popup__input_type_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = popup.querySelector('.popup__input_type_text')/// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    nameInput.value;
    jobInput.value;



// Получите значение полей jobInput и nameInput из свойства value

    let firstname = document.querySelector('.profile__name')
   let profession = document.querySelector('.profile__about') // Выберите элементы, куда должны быть вставлены значения полей
  
    firstname.textContent = nameInput.value;
    profession.textContent = jobInput.value;// Вставьте новые значения с помощью textContent
togglePopup();
}
let saveButton = popup.querySelector('.popup__save-button');


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
saveButton.addEventListener ('click',formSubmitHandler)
formElement.addEventListener('submit', formSubmitHandler);



const LikeElements = document.querySelectorAll('.element')

LikeElements.forEach((EachElement)=>{
const LikeButton = EachElement.querySelector('.element__like-button');
    LikeButton.addEventListener('click',function(event) {
        if (event.target == event.currentTarget){
        addLikes();
        }
    });
    
        function addLikes(){
            
    LikeButton.classList.toggle('element__like-button_active');
        }
})