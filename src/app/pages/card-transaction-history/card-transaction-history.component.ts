import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface PeriodicElement {
  date: string;
  transactionType: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionType: 'Sent to Muhamamd Ramzan', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'Received from Jamshed', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'Withdrawn from ATM F-11 Markaz', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'Xander’s Premo Karachi Clifton', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'AC TRANSFER CR', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
  {transactionType: 'ATM CW', date: 'Today, 10:50 am', amount: 200},
];


@Component({
  selector: 'app-card-transaction-history',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,CommonModule, MatTableModule],
  templateUrl: './card-transaction-history.component.html',
  styleUrl: './card-transaction-history.component.css'
})
export class CardTransactionHistoryComponent {
  date: string;
  transactionType: string;
  amount: number;

  displayedColumns: string[] = ['transactionType','amount'];
  dataSource = ELEMENT_DATA;

  constructor(private location: Location,public matDialog: MatDialog) {}

  back():void{
    this.location.back();
  }

}
