import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-referral',
  standalone: true,
  imports: [],
  templateUrl: './referral.component.html',
  styleUrl: './referral.component.css'
})
export class ReferralComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<ReferralComponent>) { }


  closeModal() {
    this.dialogRef.close();
  }

}
