import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { TaxManagementModalComponent } from '../../../modals/tax-management-modal/tax-management-modal.component';

@Component({
  selector: 'app-credit-card-facility',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './credit-card-facility.component.html',
  styleUrl: './credit-card-facility.component.css'
})
export class CreditCardFacilityComponent {

  constructor(private location: Location, public matDialog: MatDialog){
  }

  back():void{
    this.location.back();
  }


  
 

  serviceslist = [
    { id: 1, actionName: 'Contact details', icon : 'Account maintenance certificate.svg', url:'/card/credit-card-facility/contact-details'},
    { id: 2, actionName: 'Renewal', icon : 'Banker’s cheque.svg', url:'/card/credit-card-facility/renewal'},
    { id: 3, actionName: 'Replacement', icon : 'Update CNIC expiry.svg', url:'/card/credit-card-facility/replacement'},
    { id: 4, actionName: 'Reversal of charges', icon : 'Update CNIC expiry.svg', url:'/card/credit-card-facility/reversal-of-charges'},
    { id: 5, actionName: 'SMS subscription', icon : 'Update CNIC expiry.svg', url:'/card/credit-card-facility/sms-subscription'},
    { id: 6, actionName: 'Billing Cycle', icon : 'Update CNIC expiry.svg', url:'/card/credit-card-facility/billing-cycle'},
    // { id: 5, actionName: 'Multi-pay', icon : 'Multi-pay.svg', url:'/settings/appearance'}
  ];




}
