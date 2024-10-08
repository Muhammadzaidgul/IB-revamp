import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NoDueBillsComponent } from "../../empty-state/no-due-bills/no-due-bills.component";

export interface PeriodicElement {
  accountNumber: string;
  transactionType: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionType: 'Beaconhouse School', accountNumber: '00056171912191871', amount: 200},
  {transactionType: 'Karachi Club gym', accountNumber: '00056171912191871', amount: 200},
  {transactionType: 'Ideal FC', accountNumber: '00056171912191871', amount: 200},
];

@Component({
    selector: 'app-due-bills',
    standalone: true,
    templateUrl: './due-bills.component.html',
    styleUrl: './due-bills.component.css',
    imports: [CommonModule, MatTableModule, NoDueBillsComponent]
})

export class DueBillsComponent {

  isBillsEmpty : boolean = false;
  displayedColumns: string[] = ['transactionType','amount','accountNumber'];
  dataSource = ELEMENT_DATA;

}
