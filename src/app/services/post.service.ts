import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:7777/api/product';

  constructor(private httpClient: HttpClient) { }


  getPosts(){
    console.log('-----------I am getPosts() method------------')
    return this.httpClient.get(this.url);
  }
}
