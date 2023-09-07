import {Component, OnDestroy, OnInit} from '@angular/core';
import {CService} from "../../providers/c.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html'
})
export class C2Component implements OnInit, OnDestroy{

  data: string[] = []

  subscription!:Subscription;

  constructor(private cSrv: CService) {
  }

  ngOnInit(): void {
    this.subscription = this.cSrv.abonner().subscribe({
      next: l => this.data.push(l)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
