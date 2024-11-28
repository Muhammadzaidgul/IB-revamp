import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { PaymentReceiptPaidComponent } from '../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { RouterModule } from '@angular/router';
import { LinkNewLoanComponent } from '../../../modals/link-new-loan/link-new-loan.component';
import { AccountSelectionComponent } from '../../../modals/account-selection/account-selection.component';

interface Payees {
  id: number,
  logo: string,
  payeeName: string,
  accountNo: string,
  accountType: string,
}

const payeesList: Payees[] = [
  { id: 1, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType: 'Alfalah' },
  { id: 2, logo: 'jazz-logo', payeeName: 'Munif Karediya', accountNo: '01017898223833', accountType: 'Otherbank' },
  { id: 3, logo: 'ufone-logo', payeeName: 'Haris Zahid', accountNo: '01017898223833', accountType: 'Otherbank' },
  { id: 4, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType: 'Alfalah' },
  { id: 5, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType: 'Alfalah' }
];


@Component({
  selector: 'app-manage-loans',
  standalone: true,
  imports: [RouterModule, MatStepperModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatChipsModule],
  templateUrl: './manage-loans.component.html',
  styleUrl: './manage-loans.component.css'
})
export class ManageLoansComponent {

  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog) {

  }


  isBAFLCard: boolean = true;

  inputText1: boolean = true;


  isNewPayment: boolean = false;
  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  isFCYAccount = true;
  isLinear = false;
  myPayees = [...payeesList];

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


  previousStep(stepper: MatStepper) {
    stepper.previous();
  }

  updateStepper(step) {
    if (step == 1) {
      this.step1 = '#18B368';
      this.step2 = '#EA5148';

    }
    else if (step == 2) {
      this.step3 = this.step2;
      this.step2 = this.step1;

    }
    else if (step == 3) {
      this.step4 = this.step3;
      this.step3 = this.step2;

    }
    else if (step == 4) {
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;

    }
  }

  nextStep(stepper: MatStepper) {
    stepper.next();
  }

  newPayment(val,stepper: MatStepper){

    if(val == 0){
      this.isNewPayment = false;
    }else{
      this.isNewPayment = true;
    }
    
    stepper.next();
  }

  selectAccount(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(AccountSelectionComponent, dialogConfig);
  }

  // Open receipt modal
  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  // Open link new loan modal
  linkModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(LinkNewLoanComponent, dialogConfig);
  }


}
