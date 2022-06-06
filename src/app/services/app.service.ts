import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from'../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient){}

  Phones():Observable<any> {
    return this.http.get<any>(`http://localhost:5000/api/phone/`)
  }
  Phone(id:string):Observable<any> {
    return this.http.get<any>(`http://localhost:5000/api/phone/${id}`)
  }

  delete(id:string):Observable<any>{
    let headers = new HttpHeaders();
    let state =  localStorage.getItem('state')?.toString()

    headers = headers.append('token', `Bearer ${JSON.parse(state+'').accessToken}`);
    return this.http.delete(`http://localhost:5000/api/phone/${id}`,{headers: headers})
  }
}
