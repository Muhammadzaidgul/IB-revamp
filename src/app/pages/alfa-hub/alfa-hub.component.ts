import { Component } from '@angular/core';
import { SearchComponent } from "../home/header/search/search.component";
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaxManagementModalComponent } from '../../modals/tax-management-modal/tax-management-modal.component';
import { ApplyChequeBookComponent } from '../../modals/apply-cheque-book/apply-cheque-book.component';

@Component({
  selector: 'app-alfa-hub',
  standalone: true,
  imports: [SearchComponent,RouterModule],
  templateUrl: './alfa-hub.component.html',
  styleUrl: './alfa-hub.component.css'
})
export class AlfaHubComponent {

  constructor(public matDialog: MatDialog){

  }


  serviceslist = [
    { id: 1, actionName: 'Account maintenance certificate', icon : 'Account maintenance certificate.svg', url:'/settings/login-security'},
    { id: 3, actionName: 'Banker’s cheque', icon : 'Banker’s cheque.svg', url:'/alfa-hub/bankerscheque'},
    { id: 4, actionName: 'Update CNIC expiry', icon : 'Update CNIC expiry.svg', url:'/settings/scheduled-payments'},
    { id: 5, actionName: 'Multi-pay', icon : 'Multi-pay.svg', url:'/settings/appearance'}
  ];

  lifestyleList = [
   
    { id: 1, actionName: 'Premo by Xander’s', icon : 'Premo by Xander’s.svg', url:'send-money'},
    { id: 2, actionName: 'Co-working space', icon : 'Co-working space.svg', url:'send-money'},
    { id: 3, actionName: 'Sehat', icon : 'Sehat.svg', url:'send-money'},
    { id: 4, actionName: 'Tohfay', icon : 'Tohfay.svg', url:'send-money'},
    { id: 5, actionName: 'Shophive', icon : 'Shophive.svg', url:'/alfa-hub/shophive'}
  ];

  taxModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(TaxManagementModalComponent, dialogConfig);
  }

  chequeBookModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(ApplyChequeBookComponent, dialogConfig);
  }

}
