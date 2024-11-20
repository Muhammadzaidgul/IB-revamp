import { Component } from '@angular/core';
import { MatStepper, MatStepperModule, MatStepperNext } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { NewPayeeComponent } from '../../mobile-top-up/new-payee/new-payee.component';
import { MobileTopupErrorComponent } from '../../../modals/mobile-topup-error/mobile-topup-error.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MobileNetworkComponent } from '../../../modals/mobile-network/mobile-network.component';
import { AlertComponent } from "../../../shared/alert/alert.component";
import { ConfirmDetailsComponent } from '../../mobile-top-up/confirm-details/confirm-details.component';

@Component({
  selector: 'app-post-paid',
  standalone: true,
  imports: [MatStepperModule, MatFormFieldModule, MatSelectModule, ConfirmDetailsComponent, AlertComponent, FormsModule, ReactiveFormsModule, MatSlideToggleModule],
  templateUrl: './post-paid.component.html',
  styleUrl: './post-paid.component.css'
})
export class PostPaidComponent {






  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog) {

  }

  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  isFCYAccount = true;
  isLinear = false;
  inputText1: boolean = false;
  inputText2: boolean = false;
  isSplitPayment: boolean = false;
  new_payment: boolean = false;
  isAlertActive: boolean = false;
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



  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptComponent, dialogConfig);
  }

  showInput(event: any, index) {
    if (event.target.checked && index == 1) {
      this.inputText1 = true;
    } else if (event.target.checked && index == 2) {
      this.inputText2 = true;
    } else {
      this.inputText1 = false;
      this.inputText2 = false;
    }

  }

  frequencyModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }


  networkErrorModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileTopupErrorComponent, dialogConfig);
  }

  networkModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileNetworkComponent, dialogConfig);

  }


 

  newPayment() {
    this.new_payment = true;
  }

  alfalah: boolean = false;




}
