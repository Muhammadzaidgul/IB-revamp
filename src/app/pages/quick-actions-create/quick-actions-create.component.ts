import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quick-actions-create',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './quick-actions-create.component.html',
  styleUrls: ['./quick-actions-create.component.css']
})
export class QuickActionsCreateComponent {
  constructor(private location: Location) {
    console.log('Component Initialized');
  }


  new_payment: boolean = true;

  back(): void {
    this.location.back();
  }

  serviceslist = [
    { id: 1, actionName: '1 Bill', icon: 'bill-payment.svg' },
    { id: 2, actionName: 'Account Activation', icon: 'account-activation.svg' },
    { id: 3, actionName: 'Account Relationship', icon: 'account-relationship.svg' },
    { id: 4, actionName: 'Appearance', icon: 'appearance.svg' },
    { id: 5, actionName: 'Loan', icon: 'loan.svg' },
    { id: 6, actionName: 'Card', icon: 'card.svg' },
    { id: 7, actionName: 'Banker Cheque', icon: 'banker-cheque.svg' },
    { id: 8, actionName: 'Cheque Management', icon: 'cheque-management.svg' },
    { id: 9, actionName: 'Digital Activity', icon: 'digital-activity.svg' },
    { id: 10, actionName: 'Donation', icon: 'donation.svg' },
    { id: 11, actionName: 'Deals and Discounts', icon: 'deals-discounts.svg' },
    { id: 12, actionName: 'Limit Management', icon: 'limit-management.svg' },
    { id: 13, actionName: 'Maintenance Certificate', icon: 'maintenance-certificate.svg' },
    { id: 14, actionName: 'Premo by Xanders', icon: 'premo-xanders.svg' },
    { id: 15, actionName: 'Scheduled Payment', icon: 'scheduled-payment.svg' },
    { id: 16, actionName: 'Tax Management', icon: 'tax-management.svg' },
    { id: 17, actionName: 'Update CNIC', icon: 'update-cnic.svg' },
    { id: 18, actionName: 'Women Financing', icon: 'women-financing.svg' }
];

  selectedCardIds: number[] = [];

  toggleSelection(cardId: number): void {
    console.log(this.selectedCardIds);
    if (this.selectedCardIds.includes(cardId)) {
      this.selectedCardIds = this.selectedCardIds.filter(id => id !== cardId);
    } else {
      this.selectedCardIds.push(cardId);
    }
    console.log('Current Selected Card IDs:', this.selectedCardIds);  // Log selected card IDs after each toggle
  }

  isSelected(cardId: number): boolean {
    const isSelected = this.selectedCardIds.includes(cardId); // Log the selection status
    return isSelected;
  }

  trackByActionId(index: number, action: { id: number }): number {
    return action.id;
  }
}
