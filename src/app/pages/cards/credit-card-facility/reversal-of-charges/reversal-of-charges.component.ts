import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SuccessCreditCardFacilitiesComponent } from '../../../../modals/success-credit-card-facilities/success-credit-card-facilities.component';

@Component({
  selector: 'app-reversal-of-charges',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './reversal-of-charges.component.html',
  styleUrl: './reversal-of-charges.component.css'
})
export class ReversalOfChargesComponent {
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
      title: 'Reversal of charges request submitted successfully!',
      description: 'Your request for reversal of charges has been successfully submitted.'
    };
    const modalDialog = this.matDialog.open(SuccessCreditCardFacilitiesComponent, dialogConfig);
  }

}
