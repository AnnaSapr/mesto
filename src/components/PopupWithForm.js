import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { formCallback }) {
    super(popupSelector);
    this._formCallback = formCallback;
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._buttonSubmit = this._form.querySelector(".popup__save-button");
    this._userButtonSubmit = this._buttonSubmit.textContent
  }

  showLoading(isLoading, message = 'Сохранение...'){
    if(isLoading){
      this._buttonSubmit.textContent = message
    }else {
      this._buttonSubmit.textContent = this._userButtonSubmit
    }
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    this._formCallback(this._getInputValues());
  }

  //собираем данные с полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  close() {
    this._form.reset();
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmitForm);
  }
}
