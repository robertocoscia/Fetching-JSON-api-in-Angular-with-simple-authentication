import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl:string= "https://jsonplaceholder.typicode.com/comments/?_limit=6"

  constructor(private _http: HttpClient) { }

  getComments():Observable<Comment[]> {
    return this._http.get<Comment[]>(this.apiUrl);
  }

  addComment(comment: Comment[]): Observable<any>{
    return this._http.post(this.apiUrl, comment, httpOptions)
  }
}
