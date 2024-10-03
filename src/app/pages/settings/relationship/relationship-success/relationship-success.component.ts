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
  
  back():void{
    this.location.back();
  }

  constructor(private location: Location){
    
  }

}
