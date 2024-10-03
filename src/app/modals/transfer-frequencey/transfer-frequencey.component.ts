import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-transfer-frequencey',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './transfer-frequencey.component.html',
  styleUrl: './transfer-frequencey.component.css'
})
export class TransferFrequenceyComponent {

  frequency : '#000';
  
  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<TransferFrequenceyComponent>) {
    
  }
  closeModal() {
    this.dialogRef.close();
  }

  frequencyCheck(){

  }

}
