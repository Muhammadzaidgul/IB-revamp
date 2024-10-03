import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NoRecentTransactionsComponent } from "../../empty-state/no-recent-transactions/no-recent-transactions.component";

export interface PeriodicElement {
  date: string;
  transactionType: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionType: 'ADC (CHRG-TAX)', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'AC TRANSFER CR', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'AC TRANSFER CR', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
];


@Component({
    selector: 'app-recent-transactions',
    standalone: true,
    templateUrl: './recent-transactions.component.html',
    styleUrl: './recent-transactions.component.css',
    imports: [CommonModule, MatTableModule, NoRecentTransactionsComponent]
})
export class RecentTransactionsComponent {


  isRecentTransactionEmpty :  boolean = true;

  displayedColumns: string[] = ['transactionType','amount'];
  dataSource = ELEMENT_DATA;

}
