import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<CardDetailsComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }


}
