import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-utility-limit',
  standalone: true,
  imports: [MatSliderModule,FormsModule],
  templateUrl: './utility-limit.component.html',
  styleUrl: './utility-limit.component.css'
})
export class UtilityLimitComponent {

  disabled = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  constructor(public dialogRef: MatDialogRef<UtilityLimitComponent>,public matDialog: MatDialog){

  }

  closeModal() {  
    this.dialogRef.close();
  }


  verifyOTP(){

    this.dialogRef.close();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "verifyOTP";
    const modalDialog = this.matDialog.open(VerifyOtpComponent, dialogConfig);
  }

}
