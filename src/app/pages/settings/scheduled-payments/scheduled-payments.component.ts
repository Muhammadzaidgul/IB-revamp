import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatStepper, MatStepperModule, MatStepperNext } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../../../modals/confirm-delete/confirm-delete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-scheduled-payments',
  standalone: true,
  imports: [
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule],
  templateUrl: './scheduled-payments.component.html',
  styleUrl: './scheduled-payments.component.css'
})
export class ScheduledPaymentsComponent {

  isLinear = false;

  payees = [
    { id:1, logo: '', payeeName: ''},
    { id:2, logo: '', payeeName: ''},
    { id:3, logo: '', payeeName: ''},
    { id:4, logo: '', payeeName: ''},
    { id:5, logo: '', payeeName: ''}
  ];

  back():void{
    this.location.back();
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


  nextStep(stepper:MatStepper){
    stepper.next();
  }

  confirmDelete(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(ConfirmDeleteComponent, dialogConfig);
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

  constructor(private location: Location,private _formBuilder: FormBuilder,public matDialog: MatDialog){

  }

}
