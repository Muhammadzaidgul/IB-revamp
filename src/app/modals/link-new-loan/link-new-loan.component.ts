import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-new-loan',
  standalone: true,
  imports: [],
  templateUrl: './link-new-loan.component.html',
  styleUrl: './link-new-loan.component.css'
})
export class LinkNewLoanComponent {

  constructor(public dialogRef: MatDialogRef<LinkNewLoanComponent>){

  }
  
  closeModal() {
    this.dialogRef.close();
  }
}
