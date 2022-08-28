import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private _HttpClient : HttpClient) { }
  baseUrl='http://satafood.codesroots.com:3000/api'
  getBanners(){
   return this._HttpClient.post(this.baseUrl+'/MobileMainPage/GetMainSliders',{})
  }
  getHomeContnt(){
   return this._HttpClient.post(this.baseUrl+'/MobileMainPage/GetHomePage',{})
  }
  getCat(){
   return this._HttpClient.get(this.baseUrl+'/Categories/index')
  }
}
