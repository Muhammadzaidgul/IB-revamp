import { Component } from '@angular/core';
import { AlertComponent } from "../../shared/alert/alert.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-source',
  standalone: true,
  imports: [AlertComponent,FormsModule,ReactiveFormsModule,],
  templateUrl: './payment-source.component.html',
  styleUrl: './payment-source.component.css'
})
export class PaymentSourceComponent {

  constructor(private _formBuilder: FormBuilder){
    
  }

  // Alert
  isAlertActive : boolean = false;
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';

  inputText1: boolean = false;
  inputText2: boolean = false;
  inputText3: boolean = false;
  inputText4: boolean = false;
  currentSelection : any;
  totalAmount = 5000;

  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  allAccounts = [
    { id:'1', title: 'Muhammad Zaid Gul', number: '00051919191923', balance: '5000', type: 'account' },
    { id:'2', title: 'Muhammad Zaid Gul', number: '00011223445992', balance: '5000', type: 'account' },
    { id:'3', title: 'Muhammad Zaid Gul', number: '00099112312312', balance: '5000', type: 'account' },
    { id:'4', title: 'Muhammad Zaid Gul', number: '00088888881231', balance: '5000', type: 'account' },
    { id:'5', title: 'VISA Platinum', number: '422089991123912312', balance: '5000', type: 'card' },
    { id:'6', title: 'Optimus Titanium', number: '123001239129442134', balance: '5000', type: 'card' },
    { id:'7', title: 'Conventional', number: '00051919191923', balance: '500', type: 'orbit' },
    { id:'8', title: 'Islamic', number: '00011223445992', balance: '1200', type: 'orbit' },
    { id:'9', title: 'Alfa Wallet', number: '008891231234124', balance: '1200', type: 'wallet' },
  ]

  myGroup = new FormGroup({
    accountInput: new FormControl()
  });
  
  showAccountInput(event: any, index: number, id: any){
    if(event.target.checked && index === 1){
      this.inputText1 = true;
      this.currentSelection = id;
      
    }else{
      this.inputText1 = false;
    }
  } 

  showCCInput(event: any, index: number, id: any){
    if (event.target.checked && index === 2) {
      
      this.inputText2 = true;
      this.currentSelection = id;

    }else{
      this.inputText2 = false;
    } 
  }

  showWalletInput(event: any, index: number, id: any){
    if (event.target.checked && index === 3) {
      
      this.inputText3 = true;
      this.currentSelection = id;

    }else{
      this.inputText3 = false;
    } 
  }

  showOrbitInput(event: any, index: number, id: any){
    
    if(event.target.checked && index === 4){
      this.inputText4 = true;
      this.currentSelection = id;
    }else{
      this.inputText4 = false;
    }
  }

  sendData(){

  }

}
