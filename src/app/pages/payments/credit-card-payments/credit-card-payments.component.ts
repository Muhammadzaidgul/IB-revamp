import { Component } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';

@Component({
  selector: 'app-credit-card-payments',
  standalone: true,
  imports: [MatStepperModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatSlideToggleModule],
  templateUrl: './credit-card-payments.component.html',
  styleUrls: ['./credit-card-payments.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class CreditCardPaymentsComponent {
  componentName = 'Credit card';

  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  inputText1: boolean = false;
  inputText2: boolean = false;
  isLinear = false;
  isAlertActive: boolean = false;

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
      this.step1 = '#18B368';
      this.step2 = '#EA5148';
    } else if (step == 2) {
      this.step3 = this.step2;
      this.step2 = this.step1;
    } else if (step == 3) {
      this.step4 = this.step3;
      this.step3 = this.step2;
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

  new_payment: boolean = false;

  newPayment() {
    this.new_payment = true;
  }

  alfalah: boolean = false;

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
        return number.slice(0, 5) + '...';
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
