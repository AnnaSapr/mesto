export default class Popup {
    constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._popupButtonClose = this._popupSelector.querySelector(
        ".popup__close-button"
      );
      this._handleCloseEsc = this._handleCloseEsc.bind(this);
      this._handleCloseOverlay = this._handleCloseOverlay.bind(this);
    }
    open() {
      this._popupSelector.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleCloseEsc);
      this._popupSelector.addEventListener("click", this._handleCloseOverlay);
    }
    close() {
      this._popupSelector.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleCloseEsc);
      this._popupSelector.removeEventListener("click", this._handleCloseOverlay);
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
        if (this._popupSelector.classList.contains("popup_opened")) {
          this.close();
        }
      });
    }
  }