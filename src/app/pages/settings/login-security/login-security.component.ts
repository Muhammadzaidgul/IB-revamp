import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { BlockAlfaComponent } from '../../../modals/block-alfa/block-alfa.component';

@Component({
  selector: 'app-login-security',
  standalone: true,
  imports: [],
  templateUrl: './login-security.component.html',
  styleUrl: './login-security.component.css'
})
export class LoginSecurityComponent {

  back():void{
    this.location.back();
  }

  constructor(private location: Location,public matDialog: MatDialog){

  }

  blockCard(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(BlockAlfaComponent, dialogConfig);
  }

}
