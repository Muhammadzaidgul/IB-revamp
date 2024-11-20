import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apply-cheque-book',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './apply-cheque-book.component.html',
  styleUrl: './apply-cheque-book.component.css'
})
export class ApplyChequeBookComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<ApplyChequeBookComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }

}
