import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService  {
  private apiUrl:string= "https://jsonplaceholder.typicode.com/posts/?_limit=6"

  constructor(private _http: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this._http.get<Post[]>(this.apiUrl);
  }

}
