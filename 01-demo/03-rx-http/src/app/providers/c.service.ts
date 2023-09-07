import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class CService {

  c1Sub = new Subject<string>()

  constructor(private http: HttpClient) {

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: posts => posts.forEach(p => console.log(p))
      });


  }

  publier(l: string) {
    this.c1Sub.next(l);
  }

  abonner() {
    return this.c1Sub.asObservable();
  }
}
