import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NoQuickActionComponent } from "../../empty-state/no-quick-action/no-quick-action.component";

@Component({
    selector: 'app-quick-actions',
    standalone: true,
    templateUrl: './quick-actions.component.html',
    styleUrl: './quick-actions.component.css',
    imports: [CommonModule, RouterModule, NoQuickActionComponent]
})
export class QuickActionsComponent {

  isActionEmpty : boolean = false;

  actionlist = [
    { id: 1, actionName: 'Send Money', icon : 'icon-send-money', url:'send-money'},
    { id: 2, actionName: 'Mobile Top Up', icon : 'icon-mobile-top-up', url:'mobile-topup' },
    { id: 3, actionName: 'Payments', icon : 'icon-payments', url:'payments' },
    { id: 4, actionName: 'Loans', icon : 'icon-loans', url:'loans' },
    { id: 5, actionName: 'Save & Invest', icon : 'icon-save-invest', url:'save-invest' },
    { id: 6, actionName: 'Cards', icon : 'icon-cards', url:'cards' },
  ];
  

}
