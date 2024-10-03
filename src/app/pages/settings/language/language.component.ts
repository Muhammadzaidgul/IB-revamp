import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {

  back():void{
    this.location.back();
  }

  constructor(private location: Location){

  }

}
