import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unlink-relationship',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unlink-relationship.component.html',
  styleUrl: './unlink-relationship.component.css'
})
export class UnlinkRelationshipComponent {

  constructor(public dialogRef: MatDialogRef<UnlinkRelationshipComponent>){

  }
  
  closeModal(){
    this.dialogRef.close();
  }

}
