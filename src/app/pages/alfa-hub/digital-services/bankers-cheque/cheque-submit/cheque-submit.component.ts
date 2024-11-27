import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentReceiptPaidComponent } from '../../../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { DomSanitizer } from '@angular/platform-browser';


import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-cheque-submit',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cheque-submit.component.html',
  styleUrl: './cheque-submit.component.css'
})
export class ChequeSubmitComponent {

  
  constructor( private router: Router,private location: Location, public matDialog: MatDialog, private _formBuilder: FormBuilder, private sanitizer: DomSanitizer) {
   
  }

  back():void{
    this.location.back();
  }


  onDoneClick() {
    // Open the modal first
    this.receiptModal();

    // After a brief delay, navigate to the desired route
    setTimeout(() => {
      this.router.navigate(['/alfa-hub/digital-activity']);
    }, 500); // Adjust delay as necessary (in ms)
  }

  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }
}
