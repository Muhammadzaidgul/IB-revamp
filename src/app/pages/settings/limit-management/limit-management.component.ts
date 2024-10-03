import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { UtilityLimitComponent } from '../../../modals/utility-limit/utility-limit.component';
import { VerifyOtpComponent } from '../../../modals/verify-otp/verify-otp.component';

@Component({
  selector: 'app-limit-management',
  standalone: true,
  imports: [ ProgressbarModule ],
  templateUrl: './limit-management.component.html',
  styleUrl: './limit-management.component.css'
})
export class LimitManagementComponent {
  max = 200000;
  dynamic = 156000;

  back():void{
    this.location.back();
  }

  constructor(private location: Location,public matDialog: MatDialog){

  }

  editUtilityModal(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "UnlinkRaast";
    dialogConfig.data = {
      id: 1,
      msg: 'You are about to unlink your Account 0005123852349. This will remove it from Alfa until you link it again.',
      isRaast: 0
    };
    
    const modalDialog = this.matDialog.open(UtilityLimitComponent, dialogConfig);

  }

  verifyOTP(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "verifyOTP";
    const modalDialog = this.matDialog.open(VerifyOtpComponent, dialogConfig);
  }

}
