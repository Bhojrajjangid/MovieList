import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = "https://demo.credy.in/api/v1/usermodule/login/";
  // moviesUrl = "https://demo.credy.in/api/v1/maya/movies/";
  moviesUrl = "https://www.omdbapi.com/?apikey=da8804af&s=batman";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',

    })
  };

  moviesHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
      apikey: 'da8804af',
      s:'batman'
    })
  };

  constructor(private http: HttpClient) { }

  postRequest(data: any) {
    return this.http.post(this.loginUrl, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  getRequest() {
    return this.http.get(this.moviesUrl, this.httpOptions).pipe(catchError(this.handleError));
  }

  getLoginDetails(LoginData: any): Observable<any> {
    console.log('Req params: ', LoginData)
    return this.postRequest(LoginData);
  }

  getMovies(token: any): Observable<any> {
    // this.moviesHttpOptions ={
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzczMSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImV4cCI6MTY1NzUzMzIyMiwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTY1NDk0MTIyMn0.th6iP9uelcuovstPpKf_f0qa_e6KbUGz9cpljFbGoIk',
    //   })
    // }
    // let header = new Headers({ 'Content-Type':  'application/json','Authorization': `Bearer ${token}` });
    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization',  `Basic ${btoa(AuthService.getToken())}`)
    // }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Token token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzczMSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImV4cCI6MTY1NzUzNTQwMywiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTY1NDk0MzQwM30.6_6l0fCY85V_jL2AAYAmifhHy5Rj0TuMkQPQ3jyKLLk'
      apikey: 'da8804af',
      s:'batman'
    });

    // const requestOptions = { headers: headers };

    return this.getRequest();
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
