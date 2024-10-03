import { Component, inject } from '@angular/core';
import { LoginBannerComponent } from './login-banner/login-banner.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { QrLoginComponent } from '../../modals/qr-login/qr-login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [LoginBannerComponent,CommonModule, ReactiveFormsModule]
})
export class LoginComponent {

  constructor(private router: Router, public matDialog:MatDialog){}

  isLogin : boolean = true;
  isLoginTrouble : boolean = false;
  fb = inject(FormBuilder);

  loginTrouble(){
    this.isLogin = false;
    this.isLoginTrouble = true;
  }

  showLogin(){
    this.isLogin = true;
    this.isLoginTrouble = false;
  }

  authenticate(){
    this.router.navigate(['/home']);
  }

  QRLogin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(QrLoginComponent, dialogConfig);
  }

  // registrationForm = this.fb.group(
  //   {
  //     firstname : ['',[Validators.required, Validators.minLength(3)]],
  //     lastname : ['',[Validators.required, Validators.minLength(3)]],
  //   }
  // );

}
