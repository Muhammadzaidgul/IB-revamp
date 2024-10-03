import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-network',
  standalone: true,
  imports: [],
  templateUrl: './mobile-network.component.html',
  styleUrl: './mobile-network.component.css'
})
export class MobileNetworkComponent {

  constructor(public dialogRef: MatDialogRef<MobileNetworkComponent>){

  }
  
  closeModal() {
    this.dialogRef.close();
  }

}
