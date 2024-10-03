  import { Component } from '@angular/core';
  import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {

  constructor(public matDialog: MatDialog,public dialogRef: MatDialogRef<ConfirmDeleteComponent>){

  }

  closeModal(){
    this.dialogRef.close();
  }

}
