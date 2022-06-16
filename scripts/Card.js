
export default class Card {
  constructor(name, link, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
  _handleDeleteClick() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector(".element__like-button");
    this._deleteBtn = this._cardElement.querySelector(".element__trash-button");
    this._cardElement.querySelector(".element__text").textContent = this._name;
    this._image = this._cardElement.querySelector(".element__image");
    this._image.src = this._link;
    this._image.alt = `Фото ${this._name}.`;
    this._setEventListeners();
    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._handleLikeClick(evt);
    });
    this._deleteBtn.addEventListener("click", (evt) => {
      this._handleDeleteClick(evt);
    });
    this._image.addEventListener("click", (evt) => {
      this._handleImageClick(evt);
    });
  }
}