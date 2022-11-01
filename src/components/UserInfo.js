export default class UserInfo {
    constructor({ profileName, profileJob, profileAvatar }) {
      this._profileName = profileName;
      this._profileJob = profileJob;
      this._profileAvatar = profileAvatar;
      this._job = document.querySelector(this._profileJob);
      this._name = document.querySelector(this._profileName);
      this._avatar = document.querySelector(this._profileAvatar)
    }
  
    getUserInfo() {
      const userInfo = {
        name: this._name.textContent,
        job: this._job.textContent,
      };
      return userInfo;
    }
    setUserAvatar(userInfo) {
      this._avatar.src = userInfo.avatar;
    }
    setUserInfo(userInfo) {
      this._name.textContent = userInfo.name;
      this._job.textContent = userInfo.about;
      
    }
  }