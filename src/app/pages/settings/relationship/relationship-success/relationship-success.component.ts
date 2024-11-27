import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relationship-success',
  standalone: true,
  imports: [],
  templateUrl: './relationship-success.component.html',
  styleUrl: './relationship-success.component.css'
})
export class RelationshipSuccessComponent {
  

  constructor(private location: Location){

  }

  back():void{
    this.location.back();
  }


}
