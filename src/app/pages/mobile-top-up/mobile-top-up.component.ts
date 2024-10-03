import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-top-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mobile-top-up.component.html',
  styleUrl: './mobile-top-up.component.css'
})
export class MobileTopUpComponent {

  payees = [
    { id:1, logo: '', payeeName: ''},
    { id:2, logo: '', payeeName: ''},
    { id:3, logo: '', payeeName: ''},
    { id:4, logo: '', payeeName: ''},
    { id:5, logo: '', payeeName: ''}
  ];
}
