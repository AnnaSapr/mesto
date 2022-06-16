class FormValidator {
    constructor(config, form){
        this._inputSelector = config.inputSelector,
        this._submitButtonSelector = config.submitButtonSelector,
        this._inactiveButtonClass = config.inactiveButtonClass,
        this._inputErrorClass = config.inputErrorClass,
        this._errorClass = config.errorClass,
        this._form = form;
    }


_showInputError (inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._inputErrorClass);
   errorElement.classList.add(this._errorClass);
  };
  
  
   _hideInputError(inputElement) {
    const errorElement =  this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
   
   _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
       this._showInputError(inputElement, errorMessage);
     } else {
      this._hideInputError(inputElement);
     }
   };

   _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

_toggleButtonState(inputList, saveButton) {
    if (this._hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    saveButton.classList.add(this._inactiveButtonClass);
    saveButton.disabled = true;
    
  } else  {

   saveButton.classList.remove(this._inactiveButtonClass);
   saveButton.disabled = false;
  
  }
};
  
  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}` ));
    const saveButton = this._form.querySelector(`.${this._submitButtonSelector}`);
  
  
    // чтобы проверить состояние кнопки в самом начале
  
    this._toggleButtonState(inputList, saveButton);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState(inputList, saveButton);
      });
    });

  };

  cleanForm = () => {
      const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}` ));
      const saveButton = this._form.querySelector(`.${this._submitButtonSelector}`)
      inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
      });

   this._toggleButtonState(inputList, saveButton)
}
}





export default FormValidator

