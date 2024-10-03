import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-topup-error',
  standalone: true,
  imports: [],
  templateUrl: './mobile-topup-error.component.html',
  styleUrl: './mobile-topup-error.component.css'
})
export class MobileTopupErrorComponent {
  
  constructor(public dialogRef: MatDialogRef<MobileTopupErrorComponent>){

  }

  closeModal() {
    this.dialogRef.close();
  }

}
