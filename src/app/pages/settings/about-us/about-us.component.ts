import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {


  back():void{
    this.location.back();
  }

  constructor(private location: Location){
  }

}
