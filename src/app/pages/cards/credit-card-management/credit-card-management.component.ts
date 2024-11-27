import { Component, Input, OnInit, input } from '@angular/core';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule,CarouselConfig } from 'ngx-bootstrap/carousel';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardDetailsComponent } from '../../../modals/card-details/card-details.component';
import { ManageCardsComponent } from '../../../modals/manage-cards/manage-cards.component';
import { CardOverviewModalComponent } from '../../../modals/card-overview-modal/card-overview-modal.component';
import { LockCardComponent } from '../../../modals/lock-card/lock-card.component';
import { CcBillDetailsComponent } from '../../../modals/cc-bill-details/cc-bill-details.component';
import { ManageCreditCardComponent } from '../../../modals/manage-credit-card/manage-credit-card.component';

export interface PeriodicElement {
  date: string;
  transactionType: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionType: 'ADC (CHRG-TAX)', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'AC TRANSFER CR', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},

];  


@Component({
  selector: 'app-credit-card-management',
  standalone: true,
  imports: [ProgressbarModule, CommonModule, RouterModule, MatTableModule, MdbCarouselModule, CarouselModule],
  templateUrl: './credit-card-management.component.html',
  styleUrl: './credit-card-management.component.css'
})
export class CreditCardManagementComponent {

  unlockCardColor = '#fff';
  dynamic = 156000;
  max = 200000;
  activeCard : boolean = false;
  showDetails : boolean = true;
  isCardLocked : boolean = false;
  disableColor = '';
  starIcon = '/assets/img/icons/setting-icon-red.svg';
  disableCardColor = '';

  constructor(public matDialog: MatDialog){
   
    if(this.isCardLocked){
      this.unlockCardColor = '#FBE1DF';
      this.disableColor = '#A9A9A9';
      this.starIcon = '/assets/img/icons/setting-icon.svg';
      this.disableCardColor = '';

    }
  }

  cards =[
    { id: 1, amount: '500,300', accountType: 'NFC VISA Titanium Card', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0002356987411', cardImg : 'assets/img/credit-cards/debit-card-overview.png' },
    { id: 2, amount: '265,800', accountType: 'Alfalah Optimus Card', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0007723987411', cardImg : 'assets/img/credit-cards/debit-card-overview.png' },
    { id: 3, amount: '489,199', accountType: 'American Express', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0002356986688', cardImg : 'assets/img/credit-cards/debit-card-overview.png' }
  ];

  ngOnInit() {
    // first time card overview
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    //const modalDialog = this.matDialog.open(CardOverviewModalComponent, dialogConfig);
    
  }

  

  displayedColumns: string[] = ['transactionType','amount'];
  dataSource = ELEMENT_DATA;

  cardDetailsModal(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(CardDetailsComponent, dialogConfig);

  }

  manageCardModal(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "manageCreditCard";
    const modalDialog = this.matDialog.open(ManageCreditCardComponent, dialogConfig);
  }

  lockCardModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "lockCard";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(LockCardComponent, dialogConfig);
  }

  billDetails(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "billDetails";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(CcBillDetailsComponent, dialogConfig);
  }

}
