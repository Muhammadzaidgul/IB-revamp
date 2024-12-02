import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonModule, Location } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { PaymentReceiptComponent } from '../../../../modals/payment-receipt/payment-receipt.component';
import { PaymentReceiptPaidComponent } from '../../../../modals/payment-receipt-paid/payment-receipt-paid.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImportantNotesComponent } from '../../../../modals/important-notes/important-notes.component';
import { BankerChequeSubmitComponent } from '../../../../modals/banker-cheque-submit/banker-cheque-submit.component';
import { TransferFrequenceyComponent } from '../../../../modals/transfer-frequencey/transfer-frequencey.component';
import { AlertComponent } from "../../../../shared/alert/alert.component";


interface Companies{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  companyType:string,
}



const companyList : Companies[] = [
  { id:1, logo: 'lesco.svg', payeeName: 'LESCO', accountNo: '0101789...', companyType:'Electricity'},
  { id:2, logo: 'bop.svg', payeeName: 'KELEC', accountNo: '0101789...', companyType:'Gas'},
  { id:3, logo: 'alfalah.svg', payeeName: 'Trans World', accountNo: '0101789...', companyType:'Internet'},
  { id:4, logo: 'lesco.svg', payeeName: 'SSGC', accountNo: '0101789...', companyType:'Gas'},
  { id:5, logo: 'lesco.svg', payeeName: 'HESCO', accountNo: '0101789...', companyType:'Electricity'}
];


interface Payees{
  id:number,
  logo:string,
  payeeName:string,
  accountNo:string,
  companyType:string,
}

const payeesList : Payees[] = [
  { id:1, logo: 'lesco.svg', payeeName: 'Payee 1', accountNo: '37214222653212', companyType:'Paypro'},
  { id:2, logo: 'lesco.svg', payeeName: 'Payee 2', accountNo: '37214222653212', companyType:'Paypro'},
  { id:3, logo: 'lesco.svg', payeeName: 'Payee 3', accountNo: '37214222653212', companyType:'Paypro'},
  { id:4, logo: 'lesco.svg', payeeName: 'Payee 4', accountNo: '37214222653212', companyType:'Paypro'},
  { id:5, logo: 'lesco.svg', payeeName: 'Payee 5', accountNo: '37214222653212', companyType:'Paypro'}
];

@Component({
  selector: 'app-paypro',
  standalone: true,
  imports: [AlertComponent, CommonModule, MatStepperModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, RouterModule, MatSlideToggleModule, MatChipsModule],
  templateUrl: './paypro.component.html',
  styleUrl: './paypro.component.css'
})
export class PayproComponent {
  constructor(private location: Location, public matDialog: MatDialog, private _formBuilder: FormBuilder, private sanitizer: DomSanitizer) {

  }


  skipToStep(stepper: MatStepper) {
    stepper.selectedIndex = stepper.selectedIndex +1; 
    stepper.next();
    
  }


  back(): void {
    this.location.back();
  }

  isSplitPayment: boolean = false;
  isChecked = false;
  // Step colors and states
  step1: string = '#EA5148';
  step2: string = '';
  step3: string = '';
  step4: string = '';
  step5: string = '';
  inputText1: boolean = false;
  inputText2: boolean = false;
  inputText3: boolean = false;
  inputText4: boolean = false;
  isNewPayment: boolean = false;
  inputValue;
  payeeInput : boolean = false;
  isLinear = false;
  isAlertActive : boolean = true;
  myPayees = [...payeesList];
  myCompanies = [...companyList];
  totalAmount = 500;
  currentSelection : any;

  // Alert
  warning = 'warning';
  msg = 'PKR 350/500 entered';
  icon = 'alert-icon.svg';
  success = 'success';

  // Form groups
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
  });

  myGroup = new FormGroup({
      accountInput: new FormControl()
  });


 
  allPayees = [
    { id:1, logo: 'lesco.svg', payeeName: 'Home Kelec', accountNo: '0101789...', companyType:'Electricity'},
    { id:2, logo: 'bop.svg', payeeName: 'Office SSGC', accountNo: '0101789...', companyType:'Gas'},
    { id:3, logo: 'alfalah.svg', payeeName: 'Office Net', accountNo: '0101789...', companyType:'Internet'},
    { id:4, logo: 'lesco.svg', payeeName: '216E Electric', accountNo: '0101789...', companyType:'Electricity'}
  ]


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

  myAccounts = [
    { id:'1', title: 'Muhammad Zaid Gul', number: '00051919191923', balance: '5000', type: 'account' },
    { id:'2', title: 'Muhammad Zaid Gul', number: '00011223445992', balance: '5000', type: 'account' },
    { id:'3', title: 'Muhammad Zaid Gul', number: '00099112312312', balance: '5000', type: 'account' },
    { id:'4', title: 'Muhammad Zaid Gul', number: '00088888881231', balance: '5000', type: 'account' },
  ]

  myCards = [
    { id:'1', title: 'VISA Platinum', number: '422089991123912312', balance: '5000', type: 'card' },
    { id:'2', title: 'Optimus Titanium', number: '123001239129442134', balance: '5000', type: 'card' },
  ]

  myOrbits = [
    { id:'1', title: 'Conventional', number: '00051919191923', balance: '500', type: 'orbit' },
    { id:'2', title: 'Islamic', number: '00011223445992', balance: '1200', type: 'orbit' },
  ]

  myWallets = [
    { id:'1', title: 'Alfa Wallet', number: '008891231234124', balance: '1200', type: 'wallet' },
  ]


  previousStep(stepper:MatStepper){
    stepper.previous();
  }

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

  // Update step colors
  updateStepper(step: number) {
    if (step === 1) {
      this.step1 = '#18B368';
      this.step2 = '#EA5148';
    } else if (step === 2) {
      this.step3 = this.step2;
      this.step2 = this.step1;
    } else if (step === 3) {
      this.step4 = this.step3;
      this.step3 = this.step2;
    } else if (step === 4) {
      this.step4 = this.step2;
      this.step3 = this.step2;
      this.step5 = this.step2;
    }
  }

  // Move to the next step in the stepper
  nextStep(stepper: MatStepper) {
    stepper.next();
    console.log(this.isNewPayment);
  }

  // Open receipt modal
  receiptModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(PaymentReceiptPaidComponent, dialogConfig);
  }

  splitPayment(){
    this.isSplitPayment = true;
  }


  onChange($event: any) {

    if ($event.value == 'Electricity') {

      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Electricity")];

    } else if ($event.value == 'Internet') {

      this.myPayees = [...payeesList.filter((payee) => payee.companyType == "Internet")];

    } else {
      this.myPayees = [...payeesList];
    }
  }

  onCompanyChange($event: any){
    if($event.value == 'Electricity'){
      
      this.myCompanies = [...companyList.filter((company) => company.companyType == "Electricity")];

    }else if($event.value == 'Gas'){
      
      this.myCompanies = [...companyList.filter((company) => company.companyType == "Gas")];

    }else{
      this.myCompanies = [...companyList];
    }
  }


  frequencyModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(TransferFrequenceyComponent, dialogConfig);
  }

  newPayment(stepper:MatStepper){

    stepper.next();
    this.isNewPayment = true;

    console.log(this.isNewPayment);
  }

  onToggleChange(event) {
    if(event.checked){

      this.isChecked = event.checked;
      this.payeeInput = true;

    }else{
      this.payeeInput = false;
    }
    
  }

  // Function to format consumer numbers with error handling
  formatConsumerNumbers(consumerNumbers: string[]): string[] {
    return consumerNumbers.map(number => {
      // Check if the number is valid (only digits) and of appropriate length
      if (!/^\d+$/.test(number)) {
        console.error(`Invalid consumer number: ${number}`); // Log error for invalid numbers
        return 'Invalid Number'; // Return a placeholder for invalid numbers
      }

      if (number.length > 11) {
        console.error(`Consumer number exceeds maximum length: ${number}`); // Log error for too long numbers
        return 'Invalid Number'; // Return a placeholder for numbers exceeding length
      }

      // Check the length of the consumer number
      if (number.length > 6) {
        // If more than 5 digits, format it as '12345...'
        return number.slice(0, 6) + '...';
      } else {
        // Otherwise, return the full number
        return number;
      }
    });
  }

  
  isAddPayee: boolean = false;

  onChange1(event: MatSlideToggleChange) {

    this.isAddPayee = event.checked; 
  }


  // Example array of consumer numbers
  consumerNumbers: string[] = [
    '12345678901',  // 11 digits
    '12345',        // 5 digits
    '678',          // 3 digits
    '987654321',    // 9 digits
    '12',           // 2 digits
    '4567890',      // 7 digits
  ];

  // Format the consumer numbers and log the result
  formattedNumbers: string[] = this.formatConsumerNumbers(this.consumerNumbers);

  ngOnInit() {
    
  }
}
