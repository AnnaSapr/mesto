export default class UserInfo {
    constructor({ profileName, profileJob }) {
      this._profileName = profileName;
      this._profileJob = profileJob;
      this._job = document.querySelector(this._profileJob);
      this._name = document.querySelector(this._profileName);
    }
  
    getUserInfo() {
      const userInfo = {
        name: this._name.textContent,
        job: this._job.textContent,
      };
      return userInfo;
    }
  
    setUserInfo(userInfo) {
      this._name.textContent = userInfo.name;
      this._job.textContent = userInfo.description;
    }
  }