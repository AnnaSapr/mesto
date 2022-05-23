const config = {
  formSelector: 'popup__container',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}

  
  const showInputError = (formElement, inputElement, errorMessage, inputErrorModifier, errorSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorModifier);
   errorElement.classList.add(errorSelector);
  };
  
  
   const hideInputError = (formElement, inputElement, inputErrorModifier, errorSelector) => {
    const errorElement =  formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorModifier);
    errorElement.classList.remove(errorSelector);
    errorElement.textContent = '';
  };
   
   const checkInputValidity = (formElement, inputElement,  inputErrorModifier, errorSelector) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
       showInputError(formElement, inputElement, errorMessage , inputErrorModifier, errorSelector);
     } else {
      hideInputError(formElement, inputElement, inputErrorModifier, errorSelector);
     }
   };

   const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, saveButton, disabledSelector) => {
    if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    saveButton.classList.add(disabledSelector);
    saveButton.disabled = true;
    
  } else  {

   saveButton.classList.remove(disabledSelector);
   saveButton.disabled = false;
  
  }
};
  
  const setEventListeners = (formElement, checkvalid) => {
    const {inputSelector, submitButtonSelector, errorClass, inputErrorClass, inactiveButtonClass} = checkvalid;
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}` ));
    const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
  
  
    // чтобы проверить состояние кнопки в самом начале
  
    toggleButtonState(inputList, saveButton,inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, saveButton, inactiveButtonClass);
      });
    });

  };
  


  const enableValidation = (validConfig) => {
    const {formSelector} = validConfig;
    const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
    setEventListeners(formElement, validConfig);
    });
  };

  enableValidation(config); 

