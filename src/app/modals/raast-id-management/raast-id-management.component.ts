import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raast-id-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './raast-id-management.component.html',
  styleUrl: './raast-id-management.component.css'
})
export class RaastIdManagementComponent {
  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<RaastIdManagementComponent>,private router: Router) { }

  closeModal() {
    this.dialogRef.close();
  }

  raastManagement(){
    this.dialogRef.close();
    this.router.navigate(['/settings/raast-id']);
  }
}

