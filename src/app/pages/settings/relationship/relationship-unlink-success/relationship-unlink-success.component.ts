import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-relationship-unlink-success',
  standalone: true,
  imports: [],
  templateUrl: './relationship-unlink-success.component.html',
  styleUrl: './relationship-unlink-success.component.css'
})
export class RelationshipUnlinkSuccessComponent {
  constructor(private location: Location){

  }

  back():void{
    this.location.back();
  }

}
