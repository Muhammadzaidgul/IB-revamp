import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.css'
})
export class MyCardsComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<MyCardsComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
