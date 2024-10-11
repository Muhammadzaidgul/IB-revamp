import { Component } from '@angular/core';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { AccountSelectComponent } from '../../../modals/account-select/account-select.component';
import { AlertComponent } from "../../../shared/alert/alert.component";

interface Payees{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  companyType:string,
}

const payeesList : Payees[] = [
  { id:1, logo: 'lesco.svg', payeeName: 'Home KE', accountNo: '0101789...', companyType:'Electricity'},
  { id:2, logo: 'bop.svg', payeeName: 'Office Gas', accountNo: '0101789...', companyType:'Gas'},
  { id:3, logo: 'alfalah.svg', payeeName: 'Office Net', accountNo: '0101789...', companyType:'Internet'},
  { id:4, logo: 'lesco.svg', payeeName: '216E Electric', accountNo: '0101789...', companyType:'Electricity'},
  { id:5, logo: 'lesco.svg', payeeName: 'Abdullah KE', accountNo: '0101789...', companyType:'Electricity'}
];

@Component({
  selector: 'app-utility',
  standalone: true,
  imports: [MatStepperModule, FormsModule, ReactiveFormsModule,MatChipsModule, RouterModule,MatSlideToggleModule, AlertComponent],
  templateUrl: './utility.component.html',
  styleUrl: './utility.component.css'
})
export class UtilityComponent {

  componentName = 'Utilities and bills';

  isSplitPayment : boolean = true;


  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  inputText1 : boolean = false;
  inputText2 : boolean = false;
  isLinear = false;
  isAlertActive : boolean = false;
  myPayees = [...payeesList];
  
  // Alert
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';

  success = 'success';


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
  })

  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog){

  }

  showInput(event:any,index){
    if(event.target.checked && index == 1){
      this.inputText1 = true;
    }else if(event.target.checked && index == 2){
      this.inputText2 = true;
    }else{
      this.inputText1 = false;
      this.inputText2 = false;
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
    const modalDialog = this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }


  onChange($event: any) {

    if($event.value == 'Electricity'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Electricity")];

    }else if($event.value == 'Internet'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Internet")];

    }else{
      this.myPayees = [...payeesList];
    }
  }


  frequencyModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

}
