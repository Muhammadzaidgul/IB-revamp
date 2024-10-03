import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoolOffConfirmationComponent } from '../cool-off-confirmation/cool-off-confirmation.component';

@Component({
  selector: 'app-update-email-address',
  standalone: true,
  imports: [],
  templateUrl: './update-email-address.component.html',
  styleUrl: './update-email-address.component.css'
})
export class UpdateEmailAddressComponent {

  label:string;
  type:string;
  placeHolder:string;

  constructor(public dialogRef: MatDialogRef<UpdateEmailAddressComponent>,public matDialog: MatDialog, @Inject(MAT_DIALOG_DATA) data){ 
    this.label = data['label'];
    this.type = data['type'];
    this.placeHolder = data['placeHolder'];
  }

  closeModal() {  
    this.dialogRef.close();
  }

  confirmModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "CoolOffModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(CoolOffConfirmationComponent, dialogConfig);

    this.dialogRef.close();
  }

}
