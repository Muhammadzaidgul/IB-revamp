import { Component } from '@angular/core';
import { SearchComponent } from "../home/header/search/search.component";
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from '../../modals/contact-us/contact-us.component';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { RaastIdManagementComponent } from '../../modals/raast-id-management/raast-id-management.component';
import { SuccessComponent } from '../../modals/success/success.component';
import { ErrorComponent } from '../../modals/error/error.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SearchComponent,RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  userName = 'Muhammad Zaid Gul';

  settinglist = [
    { id: 1, actionName: 'Login and security', icon : 'Login_and_security.svg', url:'/settings/login-security'},
    { id: 2, actionName: 'Account relationships', icon : 'Account_relationships.svg', url:'/settings/account-relationship'},
    { id: 3, actionName: 'Limit management', icon : 'Limit_management.svg', url:'/settings/limit-managment'},
    { id: 4, actionName: 'Scheduled payments', icon : 'Scheduled_payments.svg', url:'/settings/scheduled-payments'},
    { id: 5, actionName: 'Manage requests', icon : 'Manage_requests.svg', url:'send-money'},
    { id: 6, actionName: 'Appearance', icon : 'Appearance.svg', url:'/settings/appearance'},
    { id: 7, actionName: 'Language', icon : 'Language.svg', url:'/settings/language'},
    { id: 8, actionName: 'User activity', icon : 'User_activity.svg', url:'/settings/digital-activity'}
  ];

  supportList = [
   
    { id: 1, actionName: 'FAQs', icon : 'FAQs.svg', url:'/settings/faq'},
    { id: 2, actionName: 'Complaints and feedback', icon : 'Complaints_and_feedback.svg', url:'/settings/complaints'},
    { id: 3, actionName: 'Terms and conditions', icon : 'Terms_and_conditions.svg', url:'send-money'},
    { id: 4, actionName: 'Schedule of charges', icon : 'Schedule_of_charges.svg', url:'send-money'},
    { id: 5, actionName: 'About us', icon : 'About_us.svg', url:'/settings/about-us'}
  ];
  

  contactUs(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "ConfirmModal";
    dialogConfig.panelClass = 'custom-dialog-container';
    // const modalDialog = this.matDialog.open(ErrorComponent, dialogConfig);
    // const modalDialog = this.matDialog.open(SuccessComponent, dialogConfig); //success modal 
    const modalDialog = this.matDialog.open(ContactUsComponent, dialogConfig); //success modal 
  }


  raastQR(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "RaastID";
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(RaastIdManagementComponent, dialogConfig);
  }

  constructor(public matDialog: MatDialog){

  }

}
