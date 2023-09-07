import {Component, OnInit} from '@angular/core';
import {LettresService} from "./providers/lettres.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '03-rx-http';
  lettresAsync$!: Observable<string>

  constructor(private lettresSrv: LettresService) {
  }

  ngOnInit(): void {

    this.lettresAsync$ = this.lettresSrv.listerLettres();

    const lettres$ = this.lettresSrv.listerLettres();

    lettres$.subscribe({
      next: l => console.log(l),
      error: err => console.log(err),
      complete: () => console.log('fin observable')
    })
  }

}
