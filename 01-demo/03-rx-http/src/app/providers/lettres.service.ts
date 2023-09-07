import { Injectable } from '@angular/core';
import {filter, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LettresService {


  constructor() { }

  listerLettres(): Observable<string> {
    return of('A', 'B', 'C', 'D')
      .pipe(
        filter(l => l !== 'B'),
        map(l => l + 's')

      )
  }


}
