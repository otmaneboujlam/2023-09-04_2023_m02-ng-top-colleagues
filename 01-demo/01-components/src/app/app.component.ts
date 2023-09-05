import { Component } from '@angular/core';
import {Person} from "./components/person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01-components';
  compteur = 0;

  clicIdentite($event: Person) {
    this.compteur++;
    console.log($event);
  }
}
