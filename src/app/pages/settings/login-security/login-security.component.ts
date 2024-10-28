import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { BlockAlfaComponent } from '../../../modals/block-alfa/block-alfa.component';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-login-security',
  standalone: true,
  imports: [MatStepperModule,MatChipsModule,CommonModule],
  templateUrl: './login-security.component.html',
  styleUrl: './login-security.component.css'
})
export class LoginSecurityComponent {

  isLinear = false;


  constructor(private location: Location,public matDialog: MatDialog,private _formBuilder: FormBuilder){

  } 
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





  back():void{
    this.location.back();
  }

 

  blockCard(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(BlockAlfaComponent, dialogConfig);
  }

}
