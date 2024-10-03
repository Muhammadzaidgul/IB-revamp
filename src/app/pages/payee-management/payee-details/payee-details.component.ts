import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { EditPayeeComponent } from '../../../modals/edit-payee/edit-payee.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


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
  selector: 'app-payee-details',
  standalone: true,
  imports: [ CommonModule, MatTableModule,RouterModule],
  templateUrl: './payee-details.component.html',
  styleUrl: './payee-details.component.css'
})

export class PayeeDetailsComponent {

  constructor(private location: Location,public matDialog: MatDialog){
  
  }

  back():void{
    this.location.back();
  }


  displayedColumns: string[] = ['transactionType','amount'];
  dataSource = ELEMENT_DATA;

  editPayee(){
    const dialogConfig4 = new MatDialogConfig();
    dialogConfig4.id = "ConfirmModal";
    dialogConfig4.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(EditPayeeComponent, dialogConfig4);
  }
  
}
