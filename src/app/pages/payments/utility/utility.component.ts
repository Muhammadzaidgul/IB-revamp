import { Component } from '@angular/core';
import { MatStepper, MatStepperModule, MatStepperNext } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { AccountSelectComponent } from '../../../modals/account-select/account-select.component';
import { AlertComponent } from "../../../shared/alert/alert.component";

interface Payees {
  id: number,
  logo: string,
  payeeName: string,
  accountNo: string,
  companyType: string,
}

const payeesList: Payees[] = [
  { id: 1, logo: 'lesco.svg', payeeName: 'Home KE', accountNo: '0101789...', companyType: 'Electricity' },
  { id: 2, logo: 'bop.svg', payeeName: 'Office Gas', accountNo: '0101789...', companyType: 'Gas' },
  { id: 3, logo: 'alfalah.svg', payeeName: 'Office Net', accountNo: '0101789...', companyType: 'Internet' },
  { id: 4, logo: 'lesco.svg', payeeName: '216E Electric', accountNo: '0101789...', companyType: 'Electricity' },
  { id: 5, logo: 'lesco.svg', payeeName: 'Abdullah KE', accountNo: '0101789...', companyType: 'Electricity' }
];

@Component({
  selector: 'app-utility',
  standalone: true,
  imports: [MatStepperModule, FormsModule, ReactiveFormsModule, MatChipsModule, RouterModule, MatSlideToggleModule, AlertComponent],
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class UtilityComponent {
  componentName = 'Utilities and bills';
  isSplitPayment: boolean = true;

  // Step colors and states
  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  inputText1: boolean = false;
  inputText2: boolean = false;
  isLinear = false;
  isAlertActive: boolean = false;
  myPayees = [...payeesList];

  // Alert
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';
  success = 'success';

  // Form groups
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

  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog) { }

  // Show or hide input based on checkbox status
  showInput(event: any, index: number) {
    if (event.target.checked && index === 1) {
      this.inputText1 = true;
    } else if (event.target.checked && index === 2) {
      this.inputText2 = true;
    } else {
      this.inputText1 = false;
      this.inputText2 = false;
    }
  }

  // Update step colors
  updateStepper(step: number) {
    if (step === 1) {
      this.step1 = '#18B368';
      this.step2 = '#EA5148';
    } else if (step === 2) {
      this.step3 = this.step2;
      this.step2 = this.step1;
    } else if (step === 3) {
      this.step4 = this.step3;
      this.step3 = this.step2;
    } else if (step === 4) {
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;
    }
  }

  // Move to the next step in the stepper
  nextStep(stepper: MatStepper) {
    stepper.next();
  }

  // Open receipt modal
  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }


  onChange($event: any) {

    if ($event.value == 'Electricity') {

      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Electricity")];

    } else if ($event.value == 'Internet') {

      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Internet")];

    } else {
      this.myPayees = [...payeesList];
    }
  }


  frequencyModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
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
      if (number.length > 6) {
        // If more than 5 digits, format it as '12345...'
        return number.slice(0, 6) + '...';
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
