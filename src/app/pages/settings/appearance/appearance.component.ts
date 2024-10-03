import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appearance',
  standalone: true,
  imports: [],
  templateUrl: './appearance.component.html',
  styleUrl: './appearance.component.css'
})
export class AppearanceComponent {

  back():void{
    this.location.back();
  }

  constructor(private location: Location){

  }

}
