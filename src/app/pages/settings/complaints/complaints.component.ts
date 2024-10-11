import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [RouterModule,MatChipsModule],
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {


  isComplaintsEmpty : boolean = false;


  back():void{
    this.location.back();
  }

  constructor(private location: Location){

  }

}
