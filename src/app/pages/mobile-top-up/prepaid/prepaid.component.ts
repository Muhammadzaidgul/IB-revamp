import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import { ThemePalette } from '@angular/material/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { MobileNetworkComponent } from '../../../modals/mobile-network/mobile-network.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MobileTopupErrorComponent } from '../../../modals/mobile-topup-error/mobile-topup-error.component';
import { MatChipSelectionChange,MatChipsModule } from '@angular/material/chips';
import { AlertComponent } from "../../../shared/alert/alert.component";
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';

@Component({
  selector: 'app-prepaid',
  standalone: true,
  imports: [MatStepperModule,FormsModule,ReactiveFormsModule,MatSlideToggleModule,MatChipsModule,AlertComponent],
  templateUrl: './prepaid.component.html',
  styleUrl: './prepaid.component.css'
})
export class PrepaidComponent {

  constructor(private location: Location,private _formBuilder: FormBuilder,public matDialog: MatDialog){

  }

  isShowStepper : boolean = false;
  isNewPayment : boolean = false;
  step1 : string = '#18B368';
  step2 : string = '#EA5148';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  inputText1: boolean = false;
  inputText2: boolean = false;
  inputText3: boolean = false;
  inputText4: boolean = false;
  isLinear = false;
  isSplitPayment : boolean = false;
  isAlertActive : boolean = false;
  currentSelection : any;
  totalAmount = 5000;
  // Alert
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';

  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
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
  });
  seventhFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });
  
  myGroup = new FormGroup({
    accountInput: new FormControl()
  });

  payees = [
    { id:1, logo: '', payeeName: ''},
    { id:2, logo: '', payeeName: ''},
    { id:3, logo: '', payeeName: ''},
    { id:4, logo: '', payeeName: ''},
    { id:5, logo: '', payeeName: ''}
  ];

  allAccounts = [
    { id:'1', title: 'Muhammad Zaid Gul', number: '00051919191923', balance: '5000', type: 'account' },
    { id:'2', title: 'Muhammad Zaid Gul', number: '00011223445992', balance: '5000', type: 'account' },
    { id:'3', title: 'Muhammad Zaid Gul', number: '00099112312312', balance: '5000', type: 'account' },
    { id:'4', title: 'Muhammad Zaid Gul', number: '00088888881231', balance: '5000', type: 'account' },
    { id:'5', title: 'VISA Platinum', number: '422089991123912312', balance: '5000', type: 'card' },
    { id:'6', title: 'Optimus Titanium', number: '123001239129442134', balance: '5000', type: 'card' },
    { id:'7', title: 'Conventional', number: '00051919191923', balance: '500', type: 'orbit' },
    { id:'8', title: 'Islamic', number: '00011223445992', balance: '1200', type: 'orbit' },
    { id:'9', title: 'Alfa Wallet', number: '008891231234124', balance: '1200', type: 'wallet' },
  ]

  newPayment(stepper: MatStepper){
    this.isNewPayment = true;
    stepper.next();
  }

  nextStep(stepper: MatStepper) {
    stepper.next();
  }

  previousStep(stepper:MatStepper){
    stepper.previous();
  }

  showStepper(){
    this.isShowStepper = true;
  }

  splitPayment(){
    this.isSplitPayment = true;
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

  showAccountInput(event: any, index: number, id: any){
    if(event.target.checked && index === 1){
      this.inputText1 = true;
      this.currentSelection = id;
      
    }else{
      this.inputText1 = false;
    }
  }

  showCCInput(event: any, index: number, id: any){
    if (event.target.checked && index === 2) {
      
      this.inputText2 = true;
      this.currentSelection = id;

    }else{
      this.inputText2 = false;
    } 
  }

  showWalletInput(event: any, index: number, id: any){
    if (event.target.checked && index === 3) {
      
      this.inputText3 = true;
      this.currentSelection = id;

    }else{
      this.inputText3 = false;
    } 
  }

  showOrbitInput(event: any, index: number, id: any){
    
    if(event.target.checked && index === 4){
      this.inputText4 = true;
      this.currentSelection = id;
    }else{
      this.inputText4 = false;
    }
  }


  networkErrorModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileTopupErrorComponent, dialogConfig);
  }

  networkModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileNetworkComponent, dialogConfig);
  }

  frequencyModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

  receiptModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  back():void{
    this.location.back();
  }

}
