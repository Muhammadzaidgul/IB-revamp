import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PaymentReceiptPaidComponent } from '../payment-receipt-paid/payment-receipt-paid.component';

@Component({
  selector: 'app-banker-cheque-submit',
  standalone: true,
  imports: [],
  templateUrl: './banker-cheque-submit.component.html',
  styleUrl: './banker-cheque-submit.component.css'
})
export class BankerChequeSubmitComponent {
  constructor( public matDialog: MatDialog, public dialogRef: MatDialogRef<BankerChequeSubmitComponent>){}

  closeModal() {
    this.dialogRef.close();
  }


  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  openReceiptAndCloseModal() {
    this.closeModal();
    setTimeout(() => {
      this.receiptModal();
    }, 0);
  }

}
