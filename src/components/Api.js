import { data } from "autoprefixer";
import { Promise } from "core-js";

export default class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl
      // тело конструктора
    }

    _getResponseData(res) {
      return res.ok ? res.json() : Promise.reject(res.status);
  }
   getInfo(){
    return fetch(`${this._baseUrl}/users/me `, {
        headers: this._headers
    }).then((res) => this._getResponseData(res))
   }


   getCards(){
    return fetch(`${this._baseUrl}/cards `, {
        headers: this._headers
      }).then((res) => this._getResponseData(res))
    }
 

   editProfile(data){
    return fetch(`${this._baseUrl}/users/me `, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about,
          })
        }).then((res) => this._getResponseData(res))
      }
   

   addCard(data){
    return fetch(`${this._baseUrl}/cards `, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
          })
        }).then((res) => this._getResponseData(res))
      }
   

   editAvatar(data){
    return fetch(`${this._baseUrl}/users/me/avatar `, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.url,
      
        })
      }).then((res) => this._getResponseData(res))
    }
 

 
   deleteCard(id){
    return fetch(`${this._baseUrl}/cards/${id} `, {
      method: 'DELETE',
        headers: this._headers
      }).then((res) => this._getResponseData(res))
    }
 

   deleteLike(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
        headers: this._headers
      }).then((res) => this._getResponseData(res))
    }
 

   setLike(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
        headers: this._headers
      }).then((res) => this._getResponseData(res))
    }
 

  
    // другие методы работы с API
  }
  
