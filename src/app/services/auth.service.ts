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
        localStorage.setItem("state", JSON.stringify(data));
        this.weatherData.next(data)

      })
    )
  }

  

  signIn(body:any):Observable<any> {
    console.log(body)
    return this.http.post<any>(`http://localhost:5000/api/auth/register`,body).pipe(
      tap((data) => {
        this.logIn(body).subscribe(res=> console.log('user is logged-in'))
      }))
  }

  Logout(): void {
  
    localStorage.clear()
    location.reload();
  }

  user(id:string):Observable<any> {
    console.log(id)
   return this.http.get<any>(`http://localhost:5000/api/users/find/${id}`)
  }

  isLoggedIn(): boolean {

    
   let state =  localStorage.getItem('state')?.toString()
   if(state&&JSON.parse(state+'').accessToken){
   console.log( JSON.parse(state+'').accessToken);
   
    return true;

   }else{
    return false;
  }
   }
   
  
  //  ?console.log(true):console.log(false);   
   
  
}
