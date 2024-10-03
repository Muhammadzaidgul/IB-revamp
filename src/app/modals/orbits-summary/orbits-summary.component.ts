import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-orbits-summary',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './orbits-summary.component.html',
  styleUrl: './orbits-summary.component.css'
})
export class OrbitsSummaryComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<OrbitsSummaryComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
