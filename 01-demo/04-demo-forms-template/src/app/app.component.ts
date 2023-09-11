import { Component } from '@angular/core';
import {Voiture} from "./models/voiture";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-demo-forms-template';

  v1: Voiture = {
    marque: '',
    modele: ''
  }

  ajouter() {
    console.log(this.v1)
  }
}
