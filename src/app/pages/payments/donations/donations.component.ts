import { Component } from '@angular/core';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaymentFrequencyComponent } from '../../../modals/payment-frequency/payment-frequency.component';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [MatStepperModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,MatChipsModule, RouterModule,MatSlideToggleModule, AlertComponent],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {
  componentName = 'Donations';
  isFCYAccount = true;
  
  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';


  red : string = '#EA5148';
  green : string = '#18B368';


  inputText1 : boolean = false;
  inputText2 : boolean = false;
  isLinear = false;
  isAlertActive : boolean = false;
  
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

  previousStep(stepper:MatStepper){
    stepper.previous();
  }

  
  updateStepper(step){
    if(step == 1){
      this.step1 = this.green;
      this.step2 = this.red;
      
    }
    else if(step == 2){
      this.step3 = this.red;
      this.step2 = this.green;
      this.step1 = this.green;
      
    }
    else if(step == 3){
      this.step4 = this.red;
      this.step3 = this.green;
      this.step2 = this.green;
      this.step1 = this.green;
      
    }
    else if(step == 4){
      this.step5 = this.red;
      this.step4 = this.green;
      this.step3 = this.green;
      this.step2 = this.green;
      this.step1 = this.green;

      
    }
    else if (step == 5) {
      this.step5 = this.green;
      this.step4 = this.green;
      this.step3 = this.green;
      this.step2 = this.green;
      this.step1 = this.green;
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

  recurringPaymentModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "RecurringPayment";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentFrequencyComponent, dialogConfig);
  }

  myPayees = [
    { id:1, logo: 'edhi', bankName: 'UNFPA'},
    { id:2, logo: 'wpf', bankName: 'World Food Programme'},
    { id:3, logo: 'edhi', bankName: 'Edhi'},
    { id:4, logo: 'edhi', bankName: 'Saylani Welfare'},
    { id:5, logo: 'edhi', bankName: 'JDC'}
  ];


}
