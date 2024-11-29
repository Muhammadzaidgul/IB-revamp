import { Component, Inject } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-success-credit-card-facilities',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './success-credit-card-facilities.component.html',
  styleUrl: './success-credit-card-facilities.component.css'
})
export class SuccessCreditCardFacilitiesComponent {


  modalBodyTitle:string;

  modalBodyText:string;
  
  constructor(
    public matDialog: MatDialog, 
    public dialogRef: MatDialogRef<SuccessCreditCardFacilitiesComponent>, 
    @Inject(MAT_DIALOG_DATA) data
  ){ 
    this.modalBodyTitle = data['title'];
    this.modalBodyText = data['description'];
  }

 
  closeModal() {
    this.dialogRef.close();
  }






  

}
