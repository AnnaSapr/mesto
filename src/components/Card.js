
export default class Card {
  constructor(name, link,likes, id, userId, ownerId,cardSelector, handleCardClick, handleDeleteCard, handleSetLike) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleSetLike = handleSetLike;
    this.popup = document.querySelector('.popup_type_confirm')
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
 isLiked(){
  const cardIsLiked = this._likes.find(user => user._id === this._userId)
 
  return cardIsLiked
 }



  setLike(newLikes){
    this._likes = newLikes
    const likeCountElement = this._cardElement.querySelector('.element__like-count');
    likeCountElement.textContent = this._likes.length;

    if(this.isLiked()){
      this._likeButton.classList.add("element__like-button_active");
    }
    else {
      this._likeButton.classList.remove("element__like-button_active");
    }
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
    this.setLike(this._likes)
    if (this._ownerId !== this._userId) {
      this._deleteBtn.style.display = 'none'
    };
    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._handleSetLike(this._id);
    });
    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteCard(this._id);
    });
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}