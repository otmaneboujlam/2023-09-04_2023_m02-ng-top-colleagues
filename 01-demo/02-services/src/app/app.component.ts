import { Component } from '@angular/core';
import {Person} from "./components/person";
import {CalculService} from "./providers/calcul.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01-components';
  compteur = 0;

  constructor(private calculService: CalculService) {
  }

  clicIdentite($event: Person) {
    this.compteur = this.calculService.additionner(100, this.compteur);
    console.log($event);
  }
}
