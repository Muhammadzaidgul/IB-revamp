import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-overview-modal',
  standalone: true,
  imports: [],
  templateUrl: './card-overview-modal.component.html',
  styleUrl: './card-overview-modal.component.css'
})
export class CardOverviewModalComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<CardOverviewModalComponent>) { }

  closeModal(){
    this.dialogRef.close();
  }

}
