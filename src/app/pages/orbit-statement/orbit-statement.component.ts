import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StatementDownloadComponent } from '../../modals/statement-download/statement-download.component';
import { MatChipSelectionChange,MatChipsModule } from '@angular/material/chips';


export interface PeriodicElement {
  date: string;
  transactionType: string;
  transaction: string;
  amount: number;
}

const ELEMENT_DATA_Earned: PeriodicElement[] = [
  {transaction: 'Sent to Muhamamd Ramzan', transactionType:'dr', date: 'Today, 10:50 am', amount: 100},
  {transaction: 'Received from Jamshed', transactionType:'cr' ,date: 'Today, 10:50 am', amount: 400},
  {transaction: 'Withdrawn from ATM F-11 Markaz', transactionType:'atm',  date: 'Today, 10:50 am', amount: 560},
  {transaction: 'Xanders Premo Karachi Clifton', transactionType:'pos', date: 'Today, 10:50 am', amount: 90},
  {transaction: 'AC TRANSFER CR', date: 'Today, 10:50 am', transactionType:'dr', amount: 201},
  {transaction: 'ATM CW', date: 'Today, 10:50 am', transactionType:'atm', amount: 45},
  {transaction: 'ATM CW', date: 'Today, 10:50 am', transactionType:'atm', amount: 340},
];

const ELEMENT_DATA_Bonus: PeriodicElement[] = [
 
  
  {transaction: 'Withdrawn from ATM F-11 Markaz', transactionType:'atm', date: 'Today, 10:50 am', amount: 560},
  {transaction: 'Xanders Premo Karachi Clifton', transactionType:'pos', date: 'Today, 10:50 am', amount: 90},
  
  {transaction: 'ATM CW', date: 'Today, 10:50 am', transactionType:'atm', amount: 45},
  
];

@Component({
  selector: 'app-orbit-statement',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,CommonModule,MatTableModule,MatChipsModule],
  templateUrl: './orbit-statement.component.html',
  styleUrl: './orbit-statement.component.css'
})
export class OrbitStatementComponent {

  displayedColumns: string[] = ['transaction','amount'];
  dataSource = ELEMENT_DATA_Earned;

  constructor(private location: Location,public matDialog: MatDialog) {}

  back():void{
    this.location.back();
  }

  downloadStatementModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(StatementDownloadComponent, dialogConfig);
  }

  onChange($event: any) {

    if($event.value == 'Earned'){
      this.dataSource = ELEMENT_DATA_Earned
    }else if($event.value == 'Bonus'){
      this.dataSource = ELEMENT_DATA_Bonus
    }else{
      this.dataSource = ELEMENT_DATA_Earned
    }
  }


}
