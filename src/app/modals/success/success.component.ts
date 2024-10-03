import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  constructor(public dialogRef: MatDialogRef<SuccessComponent>){

  }
  closeModal() {
    this.dialogRef.close();
  }

}
