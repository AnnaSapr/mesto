import Popup from "../components/Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, formCallback ) {
    super(popupSelector);
    this._formCallback = formCallback;
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._form = this._popupElement.querySelector(".popup__form");
  }
  _handleSubmitForm(evt) {
    evt.preventDefault();
    this._formCallback();
  }

  submitHandler(newCallback){
    this._formCallback = newCallback
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmitForm);
  }
}