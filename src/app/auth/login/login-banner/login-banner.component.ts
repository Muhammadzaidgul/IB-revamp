import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-banner.component.html',
  styleUrl: './login-banner.component.css'
})
export class LoginBannerComponent {

  downloadQR:boolean = false
  banner:boolean = true

  onclick(){
    this.banner = false;
    this.downloadQR = true;
  }

}
