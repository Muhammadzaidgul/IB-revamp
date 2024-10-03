import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  
import { ThemePalette } from '@angular/material/core';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { UnlinkRelationshipComponent } from '../../../../modals/unlink-relationship/unlink-relationship.component';
import { LinkRelationshipComponent } from '../../../../modals/link-relationship/link-relationship.component';

@Component({
  selector: 'app-account-relationship',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './account-relationship.component.html',
  styleUrl: './account-relationship.component.css'
})
export class AccountRelationshipComponent {

  isLinear = false;
  color: ThemePalette = 'warn';
  checked = true;
  checked2 = false;
  disabled = false;

  back():void{
    this.location.back();
  }

  unlinkRelation(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "UnlinkRelation";
    dialogConfig.data = {
      id: 1,
      msg: 'You are about to unlink your Account 0005123852349. This will remove it from Alfa until you link it again.',
      isRaast: 0
    };    
    const modalDialog = this.matDialog.open(UnlinkRelationshipComponent, dialogConfig);

  }

  linkRelation(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "LinkRelation";
    dialogConfig.data = {
      id: 1,
      msg: 'You are about to link your Credit Card 0005123852349. This will allow you to access it from Alfa.',
      isRaast: 0
    };    
    const modalDialog = this.matDialog.open(LinkRelationshipComponent, dialogConfig);

  }

  constructor(private location: Location, public matDialog: MatDialog){

  }


}
