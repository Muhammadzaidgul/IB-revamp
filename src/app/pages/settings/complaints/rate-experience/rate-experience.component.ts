import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rate-experience',
  standalone: true,
  imports: [],
  templateUrl: './rate-experience.component.html',
  styleUrl: './rate-experience.component.css'
})
export class RateExperienceComponent {
  back():void{
    this.location.back();
  }
  constructor(private location: Location){

  }
}
