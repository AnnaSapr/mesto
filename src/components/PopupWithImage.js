import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._imageDescription = this._popupElement.querySelector(".popup__description");
  }
  open(data) {
    this._image.src = data.image;
    this._image.alt = data.text;
    this._imageDescription.textContent = `${data.text}`;
    super.open();
  }
}