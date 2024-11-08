import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-payment-frequency',
  standalone: true,
  imports: [MatChipsModule, MatSelectModule],
  templateUrl: './payment-frequency.component.html',
  styleUrl: './payment-frequency.component.css'
})
export class PaymentFrequencyComponent {
  frequency : '#000';
  
  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<PaymentFrequencyComponent>) {
    
  }
  closeModal() {
    this.dialogRef.close();
  }

  frequencyCheck(){

  }

}
