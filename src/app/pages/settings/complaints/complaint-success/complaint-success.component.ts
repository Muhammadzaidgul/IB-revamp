import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-complaint-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './complaint-success.component.html',
  styleUrl: './complaint-success.component.css'
})
export class ComplaintSuccessComponent {

  back():void{
    this.location.back();
  }
  constructor(private location: Location){

  }
}
