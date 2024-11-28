import { Component, Input,Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDataService } from '../../shared-data.service';


@Component({
  selector: 'app-link-new-loan',
  standalone: true,
  imports: [],
  templateUrl: './link-new-loan.component.html',
  styleUrl: './link-new-loan.component.css'
})
export class LinkNewLoanComponent {

  successData = {
    pageHeading : 'Loan',
    icon: 'Rocket.png', 
    mainHeading: 'Loan Linked Succesfully',
    subText: 'Congratulations! Your loan account is linked',
    btnText: 'Back to loans',
    btnIcon: 'done.svg',
    btnUrl: 'loans/manage-loans'
  }

  @Output() dataEvent = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<LinkNewLoanComponent>,
    private router: Router,
    private sharedDate : SharedDataService
  ){}
  
  closeModal() {
    this.dialogRef.close();
  }

  linkAccount(){
    this.sharedDate.sendData(this.successData);
    this.dialogRef.close();
    this.router.navigate(['/success']);
  }
}
