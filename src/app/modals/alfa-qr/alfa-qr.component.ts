import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alfa-qr',
  standalone: true,
  imports: [MatTabsModule,MatSlideToggleModule,CommonModule],
  templateUrl: './alfa-qr.component.html',
  styleUrl: './alfa-qr.component.css'
})
export class AlfaQrComponent {

  checked = false;
  checked2 = false;
  disabled = false;
  color: ThemePalette = 'warn';
  showDuration : boolean = false;
  showcustomTextBox : boolean = false;


  constructor(public matDialog: MatDialog,public dialogRef: MatDialogRef<AlfaQrComponent>){

  }

  closeModal(){
    this.dialogRef.close();
  }

  onToggleChange(event){
    if(event.checked){
      this.showDuration = true;
    }else{
      this.showDuration = false;
    }
  }

  checkCustomInput(val = null){
    if(val == 1){
      this.showcustomTextBox = true;
    }else{
      this.showcustomTextBox = false;
    }
    
  }

}
