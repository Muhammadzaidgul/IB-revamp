import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SuccessCreditCardFacilitiesComponent } from '../../../../modals/success-credit-card-facilities/success-credit-card-facilities.component';

@Component({
  selector: 'app-billing-cycle',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './billing-cycle.component.html',
  styleUrl: './billing-cycle.component.css'
})
export class BillingCycleComponent {
  constructor(private location: Location, public matDialog: MatDialog){
  }

  back():void{
    this.location.back();
  }

  successModal() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "SuccessModal";
    dialogConfig.data = {
      id: 1,
      title: 'Request to update billing cycle submitted successfully!',
      description: 'Your request to update billing cycle has been successfully submitted .'
    };
    const modalDialog = this.matDialog.open(SuccessCreditCardFacilitiesComponent, dialogConfig);
  }
}
