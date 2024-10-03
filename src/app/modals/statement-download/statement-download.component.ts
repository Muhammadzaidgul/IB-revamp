import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-statement-download',
  standalone: true,
  imports: [],
  templateUrl: './statement-download.component.html',
  styleUrl: './statement-download.component.css'
})
export class StatementDownloadComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<StatementDownloadComponent>) { }

  closeModal(){
    this.dialogRef.close();
  }
}
