import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-summary-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './summary-modal.component.html',
  styleUrl: './summary-modal.component.css'
})
export class SummaryModalComponent {
  constructor(public dialogRef: MatDialogRef<SuccessComponent>){

  }
  closeModal() {
    this.dialogRef.close();
  }
}
