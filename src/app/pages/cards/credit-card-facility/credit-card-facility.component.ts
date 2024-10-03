import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-credit-card-facility',
  standalone: true,
  imports: [],
  templateUrl: './credit-card-facility.component.html',
  styleUrl: './credit-card-facility.component.css'
})
export class CreditCardFacilityComponent {

  constructor(private location: Location){
  }

  back():void{
    this.location.back();
  }

}
