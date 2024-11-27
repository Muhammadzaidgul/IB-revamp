import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  
import { ThemePalette } from '@angular/material/core';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { UnlinkRelationshipComponent } from '../../../modals/unlink-relationship/unlink-relationship.component';
import { LinkRelationshipComponent } from '../../../modals/link-relationship/link-relationship.component';
import { RegisterRelationshipComponent } from '../../../modals/register-relationship/register-relationship.component';

@Component({
  selector: 'app-raast-qr',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './raast-qr.component.html',
  styleUrl: './raast-qr.component.css'
})
export class RaastQrComponent {

  isLinear = false;
  color: ThemePalette = 'warn';
  checked = true;
  checked2 = false;
  disabled = false;

  onToggleChange(event: any) {
    if (event.checked) {
      // Toggle is ON, call linkRelation()
      this.linkRelation();
    } else {
      // Toggle is OFF, call unlinkRelation()
      this.unlinkRelation();
    }
  }
  

  unlinkRelation(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.id = "UnlinkRaast";
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
    dialogConfig.id = "LinkRaast";
    dialogConfig.data = {
      id: 1,
      msg: 'You are about to link your Account 0005123852349 with Raast ID 0320805123',
      isRaast: 1
    };
    
    const modalDialog = this.matDialog.open(LinkRelationshipComponent, dialogConfig);

  }

  constructor(private location: Location, public matDialog: MatDialog){

  }

  onToggleOn(event: any) {
    if (event.checked) {
      // Toggle is ON, call registerRelationship()
      this.registerRelationship();
    }
  }
  

  registerRelationship(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "RaastID";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(RegisterRelationshipComponent, dialogConfig);
  }
  

 

  back():void{
    this.location.back();
  }

}
