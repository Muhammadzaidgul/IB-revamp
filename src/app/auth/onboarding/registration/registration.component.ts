import { Component } from '@angular/core';
import { AuthLogoComponent } from "../auth-logo/auth-logo.component";
import { AuthLoginButtonComponent } from "../auth-login-button/auth-login-button.component";
import { AuthProgressBarComponent } from "../auth-progress-bar/auth-progress-bar.component";
import {MatTabsModule} from '@angular/material/tabs';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReferralComponent } from '../../../modals/referral/referral.component';
import { CommonModule } from '@angular/common';
 
@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.css',
    imports: [
        AuthLogoComponent, 
        AuthLoginButtonComponent, 
        AuthProgressBarComponent, 
        MatTabsModule,MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule]
})
export class RegistrationComponent {

    showStepper : boolean = false;
    currentStep : number = 1;
    currentProgress : number = 11;
    working = false;
    strongPassword = false;
    submitted = false;

    
  constructor(private _formBuilder: FormBuilder,public matDialog: MatDialog){

  }


    signupForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
 
      });

      get f() {
        return this.signupForm.controls;
      }

      onSubmit(){
        this.submitted = true;

        if (this.signupForm.invalid) {
            return;
          }
      }


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

      
      isLinear = false;

  
      referralModal(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.id = "ConfirmModal";
        dialogConfig.panelClass = 'custom-dialog-container';
        const modalDialog = this.matDialog.open(ReferralComponent, dialogConfig);
      }

      updateProgressBar(value){
        if(value == 'n'){
            this.currentStep =  this.currentStep + 1;
            this.currentProgress =  this.currentProgress + 11;
        }else{
            this.currentStep =  this.currentStep - 1;
            this.currentProgress =  this.currentProgress - 11;
        }
      }
      
}
