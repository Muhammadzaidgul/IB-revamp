import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-login',
  standalone: true,
  imports: [],
  templateUrl: './qr-login.component.html',
  styleUrl: './qr-login.component.css'
})
export class QrLoginComponent {
  countdown: number = 14; // Start from 14 seconds
  blurImage: boolean = false; // Flag to track if the image should be blurred

  constructor(public dialogRef: MatDialogRef<QrLoginComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }

}
