import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-sms-subscription',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './sms-subscription.component.html',
  styleUrl: './sms-subscription.component.css'
})
export class SmsSubscriptionComponent {
  constructor(private location: Location, public matDialog: MatDialog){
  }

  back():void{
    this.location.back();
  }


  
  newPayment : boolean = false;


  NewPayment(){
    this.newPayment = true;
  
  }


}
