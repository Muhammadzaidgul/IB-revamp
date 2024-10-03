import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatChipSelectionChange,MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-deals-discount',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './deals-discount.component.html',
  styleUrl: './deals-discount.component.css'
})
export class DealsDiscountComponent {
  
  constructor(private location: Location){

  }

  back():void{
    this.location.back();
  }

  onChange($event: any) {

    if($event.value == 'Earned'){
      // this.dataSource = ELEMENT_DATA_Earned
    }else if($event.value == 'Bonus'){
      // this.dataSource = ELEMENT_DATA_Bonus
    }else{
      // this.dataSource = ELEMENT_DATA_Earned
    }
  }

}
