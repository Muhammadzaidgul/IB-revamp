import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-block-card',
  standalone: true,
  imports: [],
  templateUrl: './block-card.component.html',
  styleUrl: './block-card.component.css'
})
export class BlockCardComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<BlockCardComponent>) { 
  }

  closeModal() {
    this.dialogRef.close();
  }

}
