import { Component } from '@angular/core';
import { AuthLogoComponent } from "../auth-logo/auth-logo.component";
import { AuthLoginButtonComponent } from "../auth-login-button/auth-login-button.component";
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthProgressBarComponent } from "../auth-progress-bar/auth-progress-bar.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs'; 


@Component({
    selector: 'app-relationship',
    standalone: true,
    templateUrl: './relationship.component.html',
    styleUrl: './relationship.component.css',
    imports: [
      AuthLogoComponent, 
      AuthLoginButtonComponent, 
      AuthProgressBarComponent,
      MatStepperModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatTabsModule]
})
export class RelationshipComponent {

    showStepper : boolean = false;
    currentStep : number = 5;
    currentProgress : number = 50;
    checked = false;

    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    fifthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    sixthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    isLinear = false;

    constructor(private _formBuilder: FormBuilder) {}

    updateProgressBar(value){
      if(value == 'n'){
          this.currentStep =  this.currentStep + 1;
          this.currentProgress =  this.currentProgress + 10;
      }else{
          this.currentStep =  this.currentStep - 1;
          this.currentProgress =  this.currentProgress - 10;
      }
    }

   

}
