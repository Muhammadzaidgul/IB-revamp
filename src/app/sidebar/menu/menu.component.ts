import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SummaryModalComponent } from '../../modals/summary-modal/summary-modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  constructor(public matDialog: MatDialog) {}



  summaryModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    this.matDialog.open(SummaryModalComponent, dialogConfig);
  }

}
