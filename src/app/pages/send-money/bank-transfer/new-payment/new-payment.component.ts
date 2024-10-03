import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper'; 
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { PaymentReceiptComponent } from '../../../../modals/payment-receipt/payment-receipt.component';
import { TransferFrequenceyComponent } from '../../../../modals/transfer-frequencey/transfer-frequencey.component';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-payment',
  standalone: true,
  imports: [MatStepperModule,ReactiveFormsModule,MatSlideToggleModule,MatSelectModule,RouterModule],
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent {

  constructor(private _formBuilder: FormBuilder,public matDialog: MatDialog){

  }

  isLinear = false;
  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  isFCYAccount = true;
  color: ThemePalette = 'warn';
  checked = false;
  checked2 = false;
  disabled = false;


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });

  myPayees = [
    { id:1, logo: 'alfa-logo', bankName: 'Bank Alfalah(BAFL)'},
    { id:2, logo: 'jazz-logo', bankName: 'Allied Bank (ABL)'},
    { id:3, logo: 'ufone-logo', bankName: 'Askari Bank (AKBL)'},
    { id:4, logo: 'alfa-logo', bankName: 'Bank of Punjab (BOP)'},
    { id:5, logo: 'alfa-logo', bankName: 'Easypaisa'}
  ];

  nextStep(stepper:MatStepper){
    stepper.next();
  }

  updateStepper(step){
    if(step == 1){
      this.step1 = '#18B368';
      this.step2 = '#EA5148';
      
    }
    else if(step == 2){
      this.step3 = this.step2;
      this.step2 = this.step1;
      
    }
    else if(step == 3){
      this.step4 = this.step3;
      this.step3 = this.step2;
      
    }
    else if(step == 4){
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;
      
    }
  }

  receiptModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptComponent, dialogConfig);
  }

  frequencyModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

}

