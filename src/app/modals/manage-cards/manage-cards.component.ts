import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemePalette} from '@angular/material/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisablePosTransComponent } from '../disable-pos-trans/disable-pos-trans.component';
import { BlockCardComponent } from '../block-card/block-card.component';

@Component({
  selector: 'app-manage-cards',
  standalone: true,
  imports: [MatSlideToggleModule,FormsModule,ReactiveFormsModule],
  templateUrl: './manage-cards.component.html',
  styleUrl: './manage-cards.component.css'
})
export class ManageCardsComponent {

  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  isCreditCard : boolean;
  id : number;
  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<ManageCardsComponent>,private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) data) { 

    this.id = data['id'];
    this.isCreditCard = data['isCreditCard'];

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

}
