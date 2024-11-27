import { Component } from '@angular/core';

import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [],
  templateUrl: './register-success.component.html',
  styleUrl: './register-success.component.css'
})
export class RegisterSuccessComponent {


  constructor(private location: Location){

  }

  back():void{
    this.location.back();
  }
}
