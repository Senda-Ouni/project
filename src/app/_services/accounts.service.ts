import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationUrls } from '../_configuration/configuration';
import { VisitorRegister } from '../_models/AccountsModel';
 
@Injectable({
  providedIn: 'root'
})
export class AccountsService {
   constructor(private http: HttpClient, private config: ConfigurationUrls) { 
   }
 
  public visitorRegister(visitor : VisitorRegister){
    return this.http.post(this.config.visitorRegisterdApiUrl, visitor)
  }

  // public projectManagerRegister(user: UserRegister){
  //   return this.http.post(this.config.projectManagerRegisterApiUrl, user)
  // }
}
