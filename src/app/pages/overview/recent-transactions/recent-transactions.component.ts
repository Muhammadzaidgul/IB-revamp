import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';


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
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [ CommonModule, MatTableModule,RouterModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.css'
})
export class RecentTransactionsComponent {
 

  @Input() transactionType = ''; // decorate the property with @Input()

  statementType : string =  this.transactionType;

  displayedColumns: string[] = ['transactionType','amount'];
  dataSource = ELEMENT_DATA;

}