import { Component } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

interface Payees{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  bankType:string,
  bankName: string,
}


const payeesList : Payees[] = [
  { id:1, logo: 'scb.svg', payeeName: 'Ibrahim Card', accountNo: '0101789...', bankType:'Other', bankName:'SCB'},
  { id:2, logo: 'bop.svg', payeeName: 'Jane Card', accountNo: '0101789...', bankType:'Other', bankName:'BOP'},
  { id:3, logo: 'alfalah.svg', payeeName: 'Mahek Card', accountNo: '0101789...', bankType:'BAFL', bankName:'BAFL'}
];


@Component({
  selector: 'app-credit-card-payments',
  standalone: true,
  imports: [MatStepperModule,MatFormFieldModule, MatSelectModule,  CommonModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatSlideToggleModule],
  templateUrl: './credit-card-payments.component.html',
  styleUrls: ['./credit-card-payments.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class CreditCardPaymentsComponent {
skipStep(_t36: MatStepper) {
throw new Error('Method not implemented.');
}
  componentName = 'Credit card';

  step1: string = '#EA5148'; //red
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  stepperfontColor : string = '#000';
  activeStepColor : string = '#EA5148';
  pendingStepfontColor : string = '#000';
  noBorder = "1px solid #fff";
  activeStep = 0;
  completedSteps = [];
  inputText1: boolean = false;
  inputText2: boolean = false;
  isLinear = false;
  isAlertActive: boolean = false;
  myPayees = [...payeesList];
  isBAFLCard: boolean = false;
  isNewPayment: boolean = false;
  cardLabel: string;
  isBAFL :boolean =  true;
  placeHolderText: string;
  payeeInput : boolean = false;
  
  // Alert properties
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';
  success = 'success';
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  
  // Form groups
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

  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog) {}

  // Update step colors
  updateStepper(step: number) {
    if (step == 1) {

      this.step1 = '#18B368'; //green
      this.step2 = '#EA5148'; //red
      this.stepperfontColor = '#fff';
      this.completedSteps.push(1);
      this.activeStep = 2;

    } else if (step == 2) {

      this.step3 = this.step2;
      this.step2 = this.step1;
      this.stepperfontColor = '#fff';
      this.completedSteps.push(2);
      this.activeStep = 3;

    } else if (step == 3) {
      this.step4 = this.step3;
      this.step3 = this.step2;
      this.stepperfontColor = '#fff';
      this.activeStep = 4;
    } else if (step == 4) {
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;
    }
  }

  // Move to the next step in the stepper
  nextStep(stepper: MatStepper) {
    stepper.next();
  }

  onChange($event: any) {

    if($event.value == 'Bank Alfalah cards'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.bankType == "BAFL")];

    }else if($event.value == 'Other bank cards'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.bankType == "Other")];

    }else{
      this.myPayees = [...payeesList];
    }
  }

  // Show or hide input based on checkbox status
  showInput(event: any, index: number) {
    if (event.target.checked && index == 1) {
      this.inputText1 = true;
    } else if (event.target.checked && index == 2) {
      this.inputText2 = true;
    } else {
      this.inputText1 = false;
      this.inputText2 = false;
    }
  }

  hideInput(event: any, index: number) {
    this.inputText1 = false;
  }

  // Open receipt modal
  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  // Open frequency modal
  frequencyModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

  newPayment() {
    this.isNewPayment = true;
  }

  previousStep(stepper: MatStepper){
    stepper.previous();
  }

  onToggleChange(event) {
    if(event.checked){

      // this.isChecked = event.checked;
      this.payeeInput = true;

    }else{
      this.payeeInput = false;
    }
    
  }

  checkIDType(event:any,index){
    if(event.target.checked && index == 2){
 
      this.isBAFL = false;
      //  this.placeHolderText = "Enter Card Number";
      //  this.cardLabel = "Card Numberr"
 
     }else if(event.target.checked && index == 1){
      
       this.isBAFL = true;
      //  this.placeHolderText = "Please enter the CNIC";
      //  this.cardLabel = "CNIC"
     }
    
   }

  checkBankType(type:string){
    if(type == 'BAFL'){
      this.isBAFLCard = true; 
    }else{
      this.isBAFLCard = false; 
    }
  }

  // Function to format consumer numbers with error handling
  formatConsumerNumbers(consumerNumbers: string[]): string[] {
    return consumerNumbers.map(number => {
      // Check if the number is valid (only digits) and of appropriate length
      if (!/^\d+$/.test(number)) {
        console.error(`Invalid consumer number: ${number}`); // Log error for invalid numbers
        return 'Invalid Number'; // Return a placeholder for invalid numbers
      }

      if (number.length > 11) {
        console.error(`Consumer number exceeds maximum length: ${number}`); // Log error for too long numbers
        return 'Invalid Number'; // Return a placeholder for numbers exceeding length
      }

      // Check the length of the consumer number
      if (number.length > 5) {
        // If more than 5 digits, format it as '12345...'
        return number.slice(0, 7) + '...';
      } else {
        // Otherwise, return the full number
        return number;
      }
    });
  }

  // Example array of consumer numbers
  consumerNumbers: string[] = [
    '12345678901',  // 11 digits
    '12345',        // 5 digits
    '678',          // 3 digits
    '987654321',    // 9 digits
    '12',           // 2 digits
    '4567890',      // 7 digits
  ];

  // Format the consumer numbers and log the result
  formattedNumbers: string[] = this.formatConsumerNumbers(this.consumerNumbers);

  ngOnInit() {
    console.log(this.formattedNumbers); // Log formatted consumer numbers
  }
}
