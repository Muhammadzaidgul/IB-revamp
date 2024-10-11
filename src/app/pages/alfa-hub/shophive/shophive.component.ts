import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-shophive',
  standalone: true,
  imports: [MatStepperModule,MatFormFieldModule, MatSelectModule, FormsModule,ReactiveFormsModule],
  templateUrl: './shophive.component.html',
  styleUrl: './shophive.component.css'
})
export class ShophiveComponent {



  constructor(private _formBuilder: FormBuilder,private location: Location, public matDialog: MatDialog){

  }

  back():void{
    this.location.back();
  }


  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
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

  receiptModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptComponent, dialogConfig);
  }

}
