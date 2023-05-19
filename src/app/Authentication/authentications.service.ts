import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface LoginDetails{
  email:string;
  password:string;

}

export interface apirespo{
  email:String;
  password:String;

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:9022/api/v0/credentials";
  url2:string = "http://localhost:9022/api/v0/credentialss";


  flag:boolean
  getAuth(formdata:LoginDetails){
    // return this.http.post<apirespo>(this.url,formdata).pipe(
    //   map((respo:apirespo)=>{
    //     console.log(respo)
    //     if (respo && respo.email) {


    //       this.flag=true
    //       console.log(this.flag)
    //       console.log(respo.email)
    //       console.log(respo.password)
    //     }

    //     return respo;

    //   })
    // )
    return this.http.post<apirespo>(this.url,formdata)
  }


  getOath(){

    return this.http.get<any>(this.url2)
  }

  logoutt:boolean
  logout(): Observable<any> {
    const url1 = this.url;
    this.logoutt = true;
    return this.http.post(url1, {});
  }
}
