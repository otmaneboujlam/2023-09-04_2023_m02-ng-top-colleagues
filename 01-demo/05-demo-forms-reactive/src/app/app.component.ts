import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-demo-forms-reactive';
  vForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.vForm = this.fb.group({
      modele: ['', [Validators.required, this.validaterModelePerso, Validators.minLength(5)]],
      marque: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get modeleErr() {
    const modeleCtrl = this.vForm.get('modele');
    return modeleCtrl && modeleCtrl.dirty && modeleCtrl.invalid;
  }

  get modeleErrors() {
    const modeleCtrl = this.vForm.get('modele');
    return modeleCtrl?.errors;
  }

  validaterModelePerso(control: FormControl): ValidationErrors | null {
    // vérification
    // si OK => return null
    // si KO => return un objet erreur
    const saisie:string = control.value;
    if(saisie.startsWith('a')) {
      return null;
    }
    // null => OK, pas d'erreur

    return {
      perso: 'le modele doit commencer par a'
    };
  }

  ajouter() {
    console.log(this.vForm.value)
  }
}
