import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemePalette} from '@angular/material/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisablePosTransComponent } from '../disable-pos-trans/disable-pos-trans.component';
import { BlockCardComponent } from '../block-card/block-card.component';
import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-manage-credit-card',
  standalone: true,
  imports: [MatSlideToggleModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './manage-credit-card.component.html',
  styleUrl: './manage-credit-card.component.css'
})
export class ManageCreditCardComponent {
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;


  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<ManageCreditCardComponent>,private _formBuilder: FormBuilder,private router: Router) { 


  }

  closeModal() {
    this.dialogRef.close();
  }

  posModal(){
    if(this.formGroup.status == 'VALID'){
      
      //this.dialogRef.close(); //close current modal

      const dialogConfig = new MatDialogConfig();
      dialogConfig.id = "DisablePOS";
      dialogConfig.panelClass = 'custom-dialog-container';
      const modalDialog = this.matDialog.open(DisablePosTransComponent, dialogConfig);
    }
  }

  blockCardModal(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.id = "blockCard";
      dialogConfig.panelClass = 'custom-dialog-container';
      const modalDialog = this.matDialog.open(BlockCardComponent, dialogConfig);
  }

  creditCardFacility(){
    this.router.navigate(['card/credit-card-facility']);
    this.dialogRef.close();
  }

  changePin(){
    this.router.navigate(['card/change-pin']);
    this.dialogRef.close();
  }

}
