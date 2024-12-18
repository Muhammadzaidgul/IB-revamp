import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonModule, Location } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { PaymentReceiptComponent } from '../../../../modals/payment-receipt/payment-receipt.component';
import { PaymentReceiptPaidComponent } from '../../../../modals/payment-receipt-paid/payment-receipt-paid.component';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImportantNotesComponent } from '../../../../modals/important-notes/important-notes.component';
import { BankerChequeSubmitComponent } from '../../../../modals/banker-cheque-submit/banker-cheque-submit.component';


@Component({
  selector: 'app-bankers-cheque',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule],
  templateUrl: './bankers-cheque.component.html',
  styleUrl: './bankers-cheque.component.css'
})
export class BankersChequeComponent {


  constructor(private location: Location, public matDialog: MatDialog, private _formBuilder: FormBuilder, private sanitizer: DomSanitizer) {

  }

  htmlFilePath: SafeResourceUrl;

  ngOnInit(): void {
    this.htmlFilePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/html/myfile.html');
  }

  back(): void {
    this.location.back();
  }


  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  isFCYAccount = true;
  isLinear = false;

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

  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  importantModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(ImportantNotesComponent, dialogConfig);
  }


  submitSuccessModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(BankerChequeSubmitComponent, dialogConfig);
  }

  placeholderLabel = "cnic";
  selectedChip1: number = 1; // Default selection


  checkLabel(index: number) {
    this.selectedChip1 = index;

    if (index === 1) {
      this.placeholderLabel = "cnic";


    } else if (index === 2) {
      this.placeholderLabel = "passport";

    }
    else if (index === 3) {
      this.placeholderLabel = "NTN";

    }
  }


  messageRepresentative = "Please carry your CNIC copy as evidence of authorized representation when picking up banker’s cheque";
  selectedChip: number = 1; // Default selection
  showMessage: boolean = false;

  checkIDType(index: number) {
    this.selectedChip = index;

    if (index === 1) {
      this.messageRepresentative = "Please carry your CNIC copy as evidence of authorized representation when picking up banker’s cheque";

      this.showMessage = true;
    } else if (index === 2) {
      this.messageRepresentative = "Please carry your CNIC copy as evidence of authorized representation when picking up another account holder’s banker’s cheque";
      this.showMessage = false;
    }
  }




}
