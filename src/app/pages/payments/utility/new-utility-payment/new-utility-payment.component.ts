import { Component } from '@angular/core';
import { MatChipSelectionChange,MatChipsModule  } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-utility-payment',
  standalone: true,
  imports: [MatChipsModule,MatSlideToggleModule,MatStepperModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-utility-payment.component.html',
  styleUrl: './new-utility-payment.component.css'
})
export class NewUtilityPaymentComponent {
  componentName = 'Utilities and bills';
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


  constructor(private _formBuilder: FormBuilder){

  }
  isLinear = false;

  nextStep(stepper:MatStepper){
    stepper.next();
  }
}
