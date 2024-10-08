import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import {MatStepper, MatStepperModule, MatStepperNext} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PaymentReceiptComponent } from '../../../modals/payment-receipt/payment-receipt.component';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { TransferFrequenceyComponent } from '../../../modals/transfer-frequencey/transfer-frequencey.component';
import { CommonModule } from '@angular/common';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

interface Payees{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  accountType:string,
}

const payeesList : Payees[] = [
  { id:1, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType:'Alfalah'},
  { id:2, logo: 'jazz-logo', payeeName: 'Munif Karediya', accountNo: '01017898223833', accountType:'Otherbank'},
  { id:3, logo: 'ufone-logo', payeeName: 'Haris Zahid', accountNo: '01017898223833', accountType:'Otherbank'},
  { id:4, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType:'Alfalah'},
  { id:5, logo: 'alfa-logo', payeeName: 'Abdullah Ammar', accountNo: '01017898223833', accountType:'Alfalah'}
];

@Component({
  selector: 'app-bank-transfer',
  standalone: true,
  templateUrl: './bank-transfer.component.html',
  styleUrl: './bank-transfer.component.css',
  imports: [CommonModule,MatStepperModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule]
})
export class BankTransferComponent {

  constructor(private _formBuilder: FormBuilder,public matDialog: MatDialog){

  }

  step1 : string = '#EA5148';
  step2 : string = '';
  step3 : string = '';
  step4 : string = '';
  step5 : string = '';
  isFCYAccount = true;
  isLinear = false;
  myPayees = [...payeesList];

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

  onChange($event: any) {

    if($event.value == 'Bank Alfalah'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.accountType == "Alfalah")];

    }else if($event.value == 'Other Banks'){
      
      this.myPayees = [...payeesList.filter((payee) => payee.accountType == "Otherbank")];

    }else{
      this.myPayees = [...payeesList];
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


  pokemonControl = new FormControl('');
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Account',
      pokemon: [
        {value: '57431231663731', viewValue: '57431231663731'},
        {value: '57131231663731', viewValue: '57401231663731'},
      ],
    },
    {
      name: 'Wallet',
      pokemon: [
        {value: 'wallet-1', viewValue: 'wallet-1'},
        {value: 'wallet-2', viewValue: 'wallet-2'}
      ],
    }
  ];

  receiptModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(PaymentReceiptComponent, dialogConfig);
  }

  frequencyModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

}
