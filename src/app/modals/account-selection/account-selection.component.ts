import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.css'
})
export class AccountSelectionComponent {

  constructor(public dialogRef: MatDialogRef<AccountSelectionComponent>){

  }

  closeModal() {
    this.dialogRef.close();
  }



}
