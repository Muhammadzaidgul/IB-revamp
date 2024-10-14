import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-book-a-term-deposit',
  standalone: true,
  imports: [MatChipsModule, MatStepperModule],
  templateUrl: './book-a-term-deposit.component.html',
  styleUrl: './book-a-term-deposit.component.css'
})
export class BookATermDepositComponent {
  isLinear = false;


  constructor(private _formBuilder: FormBuilder, public matDialog: MatDialog) { }
  
  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


    // Move to the next step in the stepper
    nextStep(stepper: MatStepper) {
      stepper.next();
    }



}
