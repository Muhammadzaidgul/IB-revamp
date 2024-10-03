import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cc-bill-details',
  standalone: true,
  imports: [],
  templateUrl: './cc-bill-details.component.html',
  styleUrl: './cc-bill-details.component.css'
})
export class CcBillDetailsComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<CcBillDetailsComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }


}
