import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-disable-pos-trans',
  standalone: true,
  imports: [],
  templateUrl: './disable-pos-trans.component.html',
  styleUrl: './disable-pos-trans.component.css'
})
export class DisablePosTransComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<DisablePosTransComponent>) { 
  }

  closeModal(){
    this.dialogRef.close();
  }
}
