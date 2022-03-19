import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User!:Observable<any>
  public weatherData: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }



  logIn(body:any):Observable<any> {
    return this.http.post<any>(`http://localhost:5000/api/auth/login`,body).pipe(
      tap((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.weatherData.next(data)

      })
    )
  }

  

  signIn(body:any):Observable<any> {
    console.log(body)
    return this.http.post<any>(`http://localhost:5000/api/auth/register`,body).pipe(
      tap((data) => {
        localStorage.setItem("user", JSON.stringify(data));

      }))
  }

  Logout(): void {
  
    localStorage.clear()
    location.reload();
  }

}
