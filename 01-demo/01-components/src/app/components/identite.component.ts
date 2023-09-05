import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Person} from "./person";


@Component({
  selector: 'app-id',
  template: `
    <h3>Identité</h3>
    <ul>
      <li>Nom: {{nom}}</li>
      <li>Prénom: {{prenom}}</li>
    </ul>
    <button (click)="clic()">Clic</button>
  `
})
export class IdentiteComponent {

  @Input() nom = '';
  @Input() prenom = '';

  @Output() idClic = new EventEmitter<Person>()

  clic() {
    this.idClic.emit({nom: this.nom, prenom: this.prenom})
  }
}
