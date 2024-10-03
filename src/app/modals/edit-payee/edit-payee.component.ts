import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-payee',
  standalone: true,
  imports: [],
  templateUrl: './edit-payee.component.html',
  styleUrl: './edit-payee.component.css'
})
export class EditPayeeComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<EditPayeeComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }


}
