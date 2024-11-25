import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-important-notes',
  standalone: true,
  imports: [],
  templateUrl: './important-notes.component.html',
  styleUrl: './important-notes.component.css'
})
export class ImportantNotesComponent {
  constructor(public dialogRef: MatDialogRef<ImportantNotesComponent>){}

  closeModal() {
    this.dialogRef.close();
  }
}
