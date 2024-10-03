import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../../../modals/update-profile/update-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  back():void{
    this.location.back();
  }

  updateEmailModal(){
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.panelClass = 'custom-dialog-container';

    dialogConfig.id = "ConfirmModal";
    dialogConfig.data = {
      id: 1,
      label: 'Email Address',
      placeHolder: 'abc@gmail.com',
      type: 'email',
    };

    const modalDialog = this.matDialog.open(UpdateProfileComponent, dialogConfig);
  }

  updateMailingAddressModal(){

    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.panelClass = 'custom-dialog-container';

    dialogConfig.id = "ConfirmModal2";
    dialogConfig.data = {
      id: 2,
      label: 'Mailing Address',
      placeHolder: 'XXXXXX',
      type: 'text',
    };

    const modalDialog = this.matDialog.open(UpdateProfileComponent, dialogConfig);

  }

  updateMobileNumberModal(){
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.panelClass = 'custom-dialog-container';

    dialogConfig.id = "ConfirmModal3";
    dialogConfig.data = {
      id: 3,
      label: 'Mobile Number',
      placeHolder: '03XX-XXXXXX',
      type: 'number',
    };

    const modalDialog = this.matDialog.open(UpdateProfileComponent, dialogConfig);
  }


  constructor(private location: Location,public matDialog: MatDialog){

  }
}
