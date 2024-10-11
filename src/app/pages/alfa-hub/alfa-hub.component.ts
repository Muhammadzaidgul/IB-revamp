import { Component } from '@angular/core';
import { SearchComponent } from "../home/header/search/search.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alfa-hub',
  standalone: true,
  imports: [SearchComponent,RouterModule],
  templateUrl: './alfa-hub.component.html',
  styleUrl: './alfa-hub.component.css'
})
export class AlfaHubComponent {



  serviceslist = [
    { id: 1, actionName: 'Account maintenance certificate', icon : 'Account maintenance certificate.svg', url:'/settings/login-security'},
    { id: 2, actionName: 'Cheque management', icon : 'Cheque management.svg', url:'/settings/account-relationship'},
    { id: 3, actionName: 'Banker’s cheque', icon : 'Banker’s cheque.svg', url:'/settings/limit-managment'},
    { id: 4, actionName: 'Update CNIC expiry', icon : 'Update CNIC expiry.svg', url:'/settings/scheduled-payments'},
    { id: 5, actionName: 'Tax management', icon : 'Tax management.svg', url:'send-money'},
    { id: 6, actionName: 'Multi-pay', icon : 'Multi-pay.svg', url:'/settings/appearance'}
  ];

  lifestyleList = [
   
    { id: 1, actionName: 'Premo by Xander’s', icon : 'Premo by Xander’s.svg', url:'send-money'},
    { id: 2, actionName: 'Co-working space', icon : 'Co-working space.svg', url:'send-money'},
    { id: 3, actionName: 'Sehat', icon : 'Sehat.svg', url:'send-money'},
    { id: 4, actionName: 'Tohfay', icon : 'Tohfay.svg', url:'send-money'},
    { id: 5, actionName: 'Shophive', icon : 'Shophive.svg', url:'/alfa-hub/shophive'}
  ];


}
