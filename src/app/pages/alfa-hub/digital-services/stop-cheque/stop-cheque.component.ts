import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, Location } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-stop-cheque',
  standalone: true,
  imports: [CommonModule,MatStepperModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule],
  templateUrl: './stop-cheque.component.html',
  styleUrl: './stop-cheque.component.css'
})
export class StopChequeComponent {


  constructor(private location: Location,public matDialog: MatDialog,private _formBuilder: FormBuilder){

  }

  back():void{
    this.location.back();
  }

  isSingleCheque: boolean = true;

  
  
  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
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

  previousStep(stepper:MatStepper){
    stepper.previous();
  }

  updateStepper(step){
    if(step == 1){
      this.step1 = '#18B368';
      this.step2 = '#EA5148';
      
    }
    else if(step == 2){
      this.step3 = this.step2;
      this.step2 = this.step1;
      
    }
    else if(step == 3){
      this.step4 = this.step3;
      this.step3 = this.step2;
      
    }
    else if(step == 4){
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;
      
    }
  }

  nextStep(stepper:MatStepper){
    stepper.next();
  }

  selectedChip: number = 1; // Default selection
  
  checkIDType(index: number) {
    this.selectedChip = index;

    if (index === 1) {
      this.isSingleCheque = true;

    } else if (index === 2) {

      this.isSingleCheque = false;
    }
  }

}
