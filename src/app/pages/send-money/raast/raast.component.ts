import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import {MatSelectModule} from '@angular/material/select';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { AccountSelectionComponent } from '../../../modals/account-selection/account-selection.component';



@Component({
  selector: 'app-raast',
  standalone: true,
  imports: [MatStepperModule,FormsModule,ReactiveFormsModule,MatSelectModule,MatSlideToggleModule,CommonModule],
  templateUrl: './raast.component.html',
  styleUrl: './raast.component.css'
})
export class RaastComponent {
  constructor(private _formBuilder: FormBuilder,public matDialog: MatDialog){
    
  }

  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  isLinear = false;
  isNewTransfer : boolean = false;
  color: ThemePalette = 'warn';
  checked = false;
  checked2 = false;
  disabled = false;
  showBanks = false;
  payeeInput : boolean = false;
  isIBAN = false;
  placeHolderText = 'Please enter the Raast ID';
  payeeLabel = "Payee’s Raast ID";

  showBanker : boolean =false;

  myPayees = [
    { id:1, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType:'AccountNo'},
    { id:2, logo: 'jazz-logo', payeeName: 'Haris Zahid', accountNo: '03456767888', accountType:'RaastID'},
    { id:3, logo: 'ufone-logo',payeeName: 'Laila Khan', accountNo: '03129999883', accountType:'RaastID'},
    { id:4, logo: 'alfa-logo', payeeName: 'Zahid hussain', accountNo: '03198822883', accountType:'RaastID'},
    { id:5, logo: 'alfa-logo', payeeName: 'Munif Karefiya', accountNo: 'PK120393019...', accountType:'IBAN'}
  ];

  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

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
  })


  onToggleChange(event){
    if(event.checked){

      // this.isChecked = event.checked;
      this.payeeInput = true;

    }else{
      this.payeeInput = false;
    } 
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

  nextStep(stepper:MatStepper){
    stepper.next();
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

  newPayee(stepper:MatStepper){
    this.isNewTransfer = true;
    stepper.next();
  }

  checkIDType(event:any,index){
   if(event.target.checked && index == 2){

      this.isIBAN = true;
      this.placeHolderText = "Please enter account no./IBAN";
      this.payeeLabel = "Account Number/IBAN";
      this.showBanker=true;

    }else if(event.target.checked && index == 1){
      this.isIBAN = false;
      this.placeHolderText = "Please enter the Raast ID";
      this.payeeLabel = "RAAST ID";
      this.showBanker=false;
    }
   
  }

  onKeyUp(x) {

    if(this.isIBAN){
      if(x.target.value.startsWith("pk")){
        this.showBanks = true;
      }else{
        this.showBanks = false;
      }
    }
    // x.target.value.length > 0 && 
  } 

  selectAccount(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(AccountSelectionComponent, dialogConfig);
  }

  previousStep(stepper:MatStepper){
    stepper.previous();
  }



  

}
