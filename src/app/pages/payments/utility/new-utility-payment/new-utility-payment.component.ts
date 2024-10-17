import { Component } from '@angular/core';
import { MatChipSelectionChange,MatChipsModule  } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Payees{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  companyType:string,
}

const payeesList : Payees[] = [
  { id:1, logo: 'lesco.svg', payeeName: 'LESCO', accountNo: '0101789...', companyType:'Electricity'},
  { id:2, logo: 'bop.svg', payeeName: 'Office Gas', accountNo: '0101789...', companyType:'Gas'},
  { id:3, logo: 'alfalah.svg', payeeName: 'Office Net', accountNo: '0101789...', companyType:'Internet'},
  { id:4, logo: 'lesco.svg', payeeName: '216E Electric', accountNo: '0101789...', companyType:'Electricity'},
  { id:5, logo: 'lesco.svg', payeeName: 'Abdullah KE', accountNo: '0101789...', companyType:'Electricity'}
];

@Component({
  selector: 'app-new-utility-payment',
  standalone: true,
  imports: [MatChipsModule,MatSlideToggleModule,MatStepperModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './new-utility-payment.component.html',
  styleUrl: './new-utility-payment.component.css'
})
export class NewUtilityPaymentComponent {
  componentName = 'Utilities and bills';
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  payeeInput : boolean = false;
  myPayees = [...payeesList];
  isChecked = false;

  
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

  allPayees = [
    { id:1, logo: 'lesco.svg', payeeName: 'LESCO', accountNo: '0101789...', companyType:'Electricity'},
    { id:2, logo: 'bop.svg', payeeName: 'Office Gas', accountNo: '0101789...', companyType:'Gas'},
    { id:3, logo: 'alfalah.svg', payeeName: 'Office Net', accountNo: '0101789...', companyType:'Internet'},
    { id:4, logo: 'lesco.svg', payeeName: '216E Electric', accountNo: '0101789...', companyType:'Electricity'}
  ]

  onChange($event: any) {

    if($event.value == 'Electricity'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Electricity")];

    }else if($event.value == 'Internet'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Internet")];

    }else{
      this.myPayees = [...payeesList];
    }
  }

  isLinear = false;

  nextStep(stepper:MatStepper){
    stepper.next();
  }

  previousStep(stepper:MatStepper){
    stepper.previous();
  }

  onToggleChange(event) {
    if(event.checked){

      this.isChecked = event.checked;
      this.payeeInput = true;

    }else{
      this.payeeInput = false;
    }
    
  }

  ngOnInit() {

  }

}
