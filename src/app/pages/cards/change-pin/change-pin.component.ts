import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-change-pin',
  standalone: true,
  imports: [MatStepperModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './change-pin.component.html',
  styleUrl: './change-pin.component.css'
})
export class ChangePinComponent {
  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  

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

  
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private location: Location){

  }

  back():void{
    this.location.back();
  }

  onKeydown(event,stepper: MatStepper) {
    if(event.key === "Enter") {
      stepper.next();
      this.updateStepper(1);
    }
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
      
    }
  }

  nextStep(stepper:MatStepper){
    stepper.next();
  }
}
