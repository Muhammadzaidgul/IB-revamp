import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-digital-activity',
  standalone: true,
  imports: [  MatTabsModule, MatChipsModule],
  templateUrl: './digital-activity.component.html',
  styleUrl: './digital-activity.component.css'
})
export class DigitalActivityComponent {

  constructor(private location: Location){

  }

  back():void{
    this.location.back();
  }

}
