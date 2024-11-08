import { Component } from '@angular/core';
import { RecentTransactionsComponent } from "../overview/recent-transactions/recent-transactions.component";
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { CarouselModule,CarouselConfig } from 'ngx-bootstrap/carousel';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountDetailsComponent } from '../../modals/account-details/account-details.component';
import { MyCardsComponent } from '../../modals/my-cards/my-cards.component';
import { OrbitStatementComponent } from "../../pages/orbit-statement/orbit-statement.component";
import { OrbitsSummaryComponent } from '../../modals/orbits-summary/orbits-summary.component';
import { OverviewInsightsComponent } from '../../modals/overview-insights/overview-insights.component';
import { AlfaQrComponent } from '../../modals/alfa-qr/alfa-qr.component';

@Component({
    selector: 'app-overview',
    standalone: true,
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.css',
    imports: [RecentTransactionsComponent, MatTabsModule, CarouselModule, MdbCarouselModule, OrbitStatementComponent]
})
export class OverviewComponent {

  currentRelationship : number  = 1;
  currentOrbitRelationship : number  = 1;
  selectedRelation : string = 'Accounts';


  relationships =[
    { id: 1, amount: '500,300', accountType: 'Asaan Account', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0002356987411' },
    { id: 2, amount: '265,800', accountType: 'Asaan Remittance Account', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0007723987411' },
    { id: 3, amount: '489,199', accountType: 'Islamic Saving Account', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0002356986688' },
    { id: 4, amount: '234,890', accountType: 'Alfalah Current Account', accountTitle: 'Muhammad Zaid Gul', accountNumber: '0007366103344' }
  ];

  orbitRelationships =[
    { id: 1, amount: '5,940', orbitTier: 'Orbit 6', tierLogo: 'orbit-tier-6.svg', accountTitle: 'Muhammad Zaid Gul' },
    { id: 2, amount: '150', orbitTier: 'Orbit 3', tierLogo: 'tier-3.svg', accountTitle: 'Muhammad Zaid Gul' },
  ];

  totalRelationships = this.relationships.length;
  totalOrbitRelationships = this.orbitRelationships.length;

  updateRelationship(value){
    if(value == 'n'){
      
      this.currentRelationship =  this.currentRelationship + 1;
      if(this.currentRelationship > this.totalRelationships){
        this.currentRelationship = 1;
      }

    }else{
      this.currentRelationship =  this.currentRelationship - 1;
      if(this.currentRelationship == 0){
        this.currentRelationship = this.totalRelationships;
      }
    }
  }

  updateOrbitRelationship(value){
    if(value == 'n'){
      
      this.currentOrbitRelationship =  this.currentOrbitRelationship + 1;
      if(this.currentOrbitRelationship > this.totalOrbitRelationships){
        this.currentOrbitRelationship = 1;
      }
    
      

    }else{
      this.currentOrbitRelationship =  this.currentOrbitRelationship - 1;
      if(this.currentOrbitRelationship == 0){
        this.currentOrbitRelationship = this.totalOrbitRelationships;
      }
    }
  }


  constructor(public matDialog: MatDialog){}

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    
    if(tabChangeEvent.index == 0){
      // account transactions
      this.selectedRelation = 'Accounts';

    }else if(tabChangeEvent.index == 1){
      //orbit transaction
      this.selectedRelation = 'Orbits';
    }

    // console.log('tabChangeEvent => ', tabChangeEvent); 
    // console.log('index => ', tabChangeEvent.index); 
  }
  

  accountDetailsModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(AccountDetailsComponent, dialogConfig);
  }
  
  myCardsModal(){
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.id = "ConfirmModal";
    dialogConfig2.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(MyCardsComponent, dialogConfig2);
  }

  orbitSummary(){
    const dialogConfig3 = new MatDialogConfig();
    dialogConfig3.id = "ConfirmModal";
    dialogConfig3.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(OrbitsSummaryComponent, dialogConfig3);
  }

  viewInsight(){
    const dialogConfig4 = new MatDialogConfig();
    dialogConfig4.id = "ConfirmModal";
    dialogConfig4.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(OverviewInsightsComponent, dialogConfig4);
  }

  alfaQR(){
    const dialogConfig4 = new MatDialogConfig();
    dialogConfig4.id = "ConfirmModal";
    dialogConfig4.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(AlfaQrComponent, dialogConfig4);
  }


}
