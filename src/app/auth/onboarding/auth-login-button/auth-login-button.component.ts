import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-button',
  standalone: true,
  imports: [],
  templateUrl: './auth-login-button.component.html',
  styleUrl: './auth-login-button.component.css'
})
export class AuthLoginButtonComponent {

  constructor(private router: Router){}

  loginRedirect(){
    this.router.navigate(['/auth/login']);
  }

}
