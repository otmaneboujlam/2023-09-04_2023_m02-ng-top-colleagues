import { Component } from '@angular/core';
import {CService} from "../../providers/c.service";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html'
})
export class C1Component {

  constructor(private cSrv: CService) {
  }


  clic() {
    this.cSrv.publier('A');
  }
}
