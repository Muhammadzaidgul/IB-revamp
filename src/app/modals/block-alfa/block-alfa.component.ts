import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-block-alfa',
  standalone: true,
  imports: [],
  templateUrl: './block-alfa.component.html',
  styleUrl: './block-alfa.component.css'
})
export class BlockAlfaComponent {

  constructor(public matDialog: MatDialog,public dialogRef: MatDialogRef<BlockAlfaComponent>){

  }

  closeModal(){
    this.dialogRef.close();
  }

}
