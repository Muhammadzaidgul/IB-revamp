import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tax-management-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tax-management-modal.component.html',
  styleUrl: './tax-management-modal.component.css'
})
export class TaxManagementModalComponent {


  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<TaxManagementModalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }




}
