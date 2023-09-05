import {Component} from "@angular/core";


@Component({
  selector: 'app-c1', // <app-c1></app-c1>
  template: `
    <h2 (mouseover)="clic(saisie, $event)">Composant 1</h2>
    <ul *ngIf="compteur % 2 === 0">
      <li>{{titre1}}</li>
      <li>{{titre2}}</li>
      <li>{{ross.nom | uppercase}} {{ross.prenom}}</li>
    </ul>
    {{ross | json}}
    <p [hidden]="compteur > 3">
      Paragraphe
    </p>
    <input type="text" #saisie>
    <button (click)="clic(saisie,$event)">Clic {{compteur}}</button>
  `
})
export class C1Component {

  titre1 = 'Titre 1';
  titre2 = 'Titre 2';
  compteur = 0
  ross = {
    nom: 'Odd',
    prenom: 'Ross'
  }

  clic(saisie: HTMLInputElement, $event: MouseEvent) {
    this.titre1 = this.titre1 + saisie.value;
    saisie.value = '';
    saisie.focus();
    this.compteur++
  }
}
