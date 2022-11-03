export default class Popup {
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector)
      this._popupButtonClose = this._popupElement.querySelector(
        ".popup__close-button"
      );
      this._handleCloseEsc = this._handleCloseEsc.bind(this);
      this._handleCloseOverlay = this._handleCloseOverlay.bind(this);
     
    }
    open() {
      this._popupElement.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleCloseEsc);
      this._popupElement.addEventListener("click", this._handleCloseOverlay);
    }
    close() {
      this._popupElement.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleCloseEsc);
      this._popupElement.removeEventListener("click", this._handleCloseOverlay);
    }
    _handleCloseEsc(evt) {
      if (evt.key == "Escape") {
        this.close();
      }
    }
    _handleCloseOverlay(evt) {
      if (evt.target == evt.currentTarget) {
        this.close();
      }
    }
    setEventListeners() {
      this._popupButtonClose.addEventListener("click", () => {
          this.close();
        
      });
    }
  }