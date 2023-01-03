import CookieManager from "./cookieManager";

/* 세션 관리용 매니저클래스 */
class SessionManager{ 
  constructor(sidKey){
    this.sidKey = sidKey;
    this.cookieManager = new CookieManager();
  }

  get(){
    this.cookieManager.get(this.sidKey)
  }

  set(value){
    this.cookieManager.set(this.sidKey, value, 1, '/');
  }
}