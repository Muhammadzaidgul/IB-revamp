import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-link-relationship',
  standalone: true,
  imports: [],
  templateUrl: './link-relationship.component.html',
  styleUrl: './link-relationship.component.css'
})
export class LinkRelationshipComponent {

  id:string;
  msg:string;
  isRaast:boolean;

  constructor(public dialogRef: MatDialogRef<LinkRelationshipComponent>,@Inject(MAT_DIALOG_DATA) data){
    this.id = data['id'];
    this.msg = data['msg'];
    this.isRaast = data['isRaast'];
  }
  
  closeModal(){
    this.dialogRef.close();
  }
}
