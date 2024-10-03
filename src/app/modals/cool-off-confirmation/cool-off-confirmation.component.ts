import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cool-off-confirmation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cool-off-confirmation.component.html',
  styleUrl: './cool-off-confirmation.component.css'
})
export class CoolOffConfirmationComponent {
 
  constructor(public dialogRef: MatDialogRef<CoolOffConfirmationComponent>,private router: Router) { 
  }

  closeModal() {
    this.dialogRef.close();
    
  }

  coolOffScreen(){
   
    this.dialogRef.close();

    this.router.navigate(['/cool-off']);
  }

}
