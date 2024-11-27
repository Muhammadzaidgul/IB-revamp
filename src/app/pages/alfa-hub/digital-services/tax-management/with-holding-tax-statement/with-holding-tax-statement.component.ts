import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-with-holding-tax-statement',
  standalone: true,
  imports: [MatTabsModule, CommonModule, MatStepperModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule],
  templateUrl: './with-holding-tax-statement.component.html',
  styleUrl: './with-holding-tax-statement.component.css'
})
export class WithHoldingTaxStatementComponent {

  constructor(private location: Location, public matDialog: MatDialog, private _formBuilder: FormBuilder, private sanitizer: DomSanitizer) {
   
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


  nextStep(stepper: MatStepper) {
    stepper.next();
  }
}
