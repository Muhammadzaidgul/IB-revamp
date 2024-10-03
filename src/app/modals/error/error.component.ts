import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  constructor(public dialogRef: MatDialogRef<ErrorComponent>){}

  closeModal() {
    this.dialogRef.close();
  }

}
