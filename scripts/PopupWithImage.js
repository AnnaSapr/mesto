import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector(".popup__image");
    this._imageDescription = document.querySelector(".popup__description");
  }
  open(data) {
    super.open();
    this._image.src = data.image;
    this._image.alt = data.text;
    this._imageDescription.textContent = `${data.text}`;
  }
}