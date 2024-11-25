import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-relationship',
  standalone: true,
  imports: [],
  templateUrl: './register-relationship.component.html',
  styleUrl: './register-relationship.component.css'
})
export class RegisterRelationshipComponent {
  constructor(public dialogRef: MatDialogRef< RegisterRelationshipComponent>){

  }
  
  closeModal(){
    this.dialogRef.close();
  }
}
