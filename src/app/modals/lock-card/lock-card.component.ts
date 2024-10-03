import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule, Routes } from '@angular/router';
import { CardOverviewComponent } from '../../pages/cards/card-overview/card-overview.component';

@Component({
  selector: 'app-lock-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lock-card.component.html',
  styleUrl: './lock-card.component.css'
})
export class LockCardComponent {

  @Input() isCardLocked: boolean;
  
  constructor(private router: Router,public matDialog: MatDialog, public dialogRef: MatDialogRef<LockCardComponent>) { 
  }

  closeModal() {
    this.dialogRef.close();
  }

  lockCard(){
    this.isCardLocked = true;
   
    console.log(this.isCardLocked);

    const cardOverview = new CardOverviewComponent(null)
    this.dialogRef.close();
    this.router.navigate(['/cards']);
  }

}
