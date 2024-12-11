import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { MobileNetworkComponent } from '../../../modals/mobile-network/mobile-network.component';
import { MobileTopupErrorComponent } from '../../../modals/mobile-topup-error/mobile-topup-error.component';
import { MatChipSelectionChange,MatChipsModule } from '@angular/material/chips';
import { AlertComponent } from "../../../shared/alert/alert.component";
import { ConfirmDetailsComponent } from "../confirm-details/confirm-details.component";
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { DataService } from '../../../web/services/data.service';


@Component({
    selector: 'app-new-payee',
    standalone: true,
    templateUrl: './new-payee.component.html',
    styleUrl: './new-payee.component.css',
    imports: [MatStepperModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule, AlertComponent, ConfirmDetailsComponent]
})
export class NewPayeeComponent {

  dataFromA: string = '';
  //@Input() dataFromComp1!: boolean;
  dataFromComp1 = false;
  valueFromChild = '';

  crossOffItem(item: string) {
    this.valueFromChild = item;
    //console.warn(`Parent says: crossing off ${item}.`);
  }

  receiveData(data: string) {
    this.dataFromA = data;
  }
  
  skipToStep(stepper: MatStepper) {
    stepper.selectedIndex = stepper.selectedIndex +1; 
    stepper.next(); 
  }

  currentItem = '1234567899';
  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  inputText1 : boolean = false;
  inputText2 : boolean = false;
  isLinear = false;
  isSplitPayment : boolean = false;
  isAlertActive : boolean = false;
  
  // Alert
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';

  success = 'success';


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

  constructor(private dataService: DataService, private _formBuilder: FormBuilder,private location: Location,public matDialog: MatDialog){

  }


 


  back():void{
    this.location.back();
  }

  showInput(event:any,index){
    if(event.target.checked && index == 1){
      this.inputText1 = true;
    }else if(event.target.checked && index == 2){
      this.inputText2 = true;
    }else{
      this.inputText1 = false;
      this.inputText2 = false;
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
      this.step5 = this.step2;
      
    }
  }

  nextStep(stepper:MatStepper){
    stepper.next();
  }

  networkModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileNetworkComponent, dialogConfig);

  }

  networkErrorModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MobileTopupErrorComponent, dialogConfig);
  }

  receiptModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptComponent, dialogConfig);
  }
}
