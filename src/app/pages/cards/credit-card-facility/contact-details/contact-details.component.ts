import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SuccessCreditCardFacilitiesComponent } from '../../../../modals/success-credit-card-facilities/success-credit-card-facilities.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})


export class ContactDetailsComponent {
  constructor(private location: Location, public matDialog: MatDialog) {
  }



  back(): void {
    this.location.back();
  }

  successModal() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "SuccessModal";
    dialogConfig.data = {
      id: 1,
      title: 'Request to change contact details submitted  successfully!',
      description: 'Your request to change contact details has been successfully submitted.'
    };
    const modalDialog = this.matDialog.open(SuccessCreditCardFacilitiesComponent, dialogConfig);
  }

}
