export default class UserInfo {
    constructor({ profileName, profileJob }) {
      this._profileName = profileName;
      this._profileJob = profileJob;
      this._job = document.querySelector(this._profileJob);
      this._name = document.querySelector(this._profileName);
    }
  
    getUserInfo() {
      const UserInfo = {
        name: this._name.textContent,
        job: this._job.textContent,
      };
      return UserInfo;
    }
  
    setUserInfo(UserInfo) {
      this._name.textContent = UserInfo.name;
      this._job.textContent = UserInfo.description;
    }
  }