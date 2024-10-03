import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<AccountDetailsComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }

}
