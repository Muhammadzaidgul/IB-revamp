import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { HomeComponent } from '../pages/home/home.component';
import { QuickActionsCreateComponent } from '../pages/quick-actions-create/quick-actions-create.component';
import { OverviewComponent } from '../pages/overview/overview.component';
import { AccountStatementComponent } from '../pages/account-statement/account-statement.component';
import { OrbitStatementComponent } from '../pages/orbit-statement/orbit-statement.component';
import { CardOverviewComponent } from '../pages/cards/card-overview/card-overview.component';
import { EmptyCardComponent } from '../pages/empty-state/empty-card/empty-card.component';
import { ActivateCardComponent } from '../pages/cards/activate-card/activate-card.component';
import { CardTransactionHistoryComponent } from '../pages/card-transaction-history/card-transaction-history.component';
import { DealsDiscountComponent } from '../pages/cards/deals-discount/deals-discount.component';
import { MobileTopUpComponent } from '../pages/mobile-top-up/mobile-top-up.component';
import { NewPayeeComponent } from '../pages/mobile-top-up/new-payee/new-payee.component';
import { PayeeManagementComponent } from '../pages/payee-management/payee-management.component';
import { MyPayeesComponent } from '../pages/payee-management/my-payees/my-payees.component';
import { PayeeDetailsComponent } from '../pages/payee-management/payee-details/payee-details.component';
import { UtilityComponent } from '../pages/payments/utility/utility.component';
import { BankTransferComponent } from '../pages/send-money/bank-transfer/bank-transfer.component';
import { ScheduledPaymentsComponent } from '../pages/settings/scheduled-payments/scheduled-payments.component';
import { LoginSecurityComponent } from '../pages/settings/login-security/login-security.component';
import { AccountRelationshipComponent } from '../pages/settings/relationship/account-relationship/account-relationship.component';
import { RelationshipSuccessComponent } from '../pages/settings/relationship/relationship-success/relationship-success.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProfileComponent } from '../pages/settings/profile/profile.component';
import { AppearanceComponent } from '../pages/settings/appearance/appearance.component';
import { LanguageComponent } from '../pages/settings/language/language.component';
import { AboutUsComponent } from '../pages/settings/about-us/about-us.component';
import { LimitManagementComponent } from '../pages/settings/limit-management/limit-management.component';
import { CoolOffComponent } from '../pages/cool-off/cool-off.component';
import { RaastQrComponent } from '../pages/settings/raast-qr/raast-qr.component';
import { CreditCardManagementComponent } from '../pages/cards/credit-card-management/credit-card-management.component';
import { CreditCardFacilityComponent } from '../pages/cards/credit-card-facility/credit-card-facility.component';
import { ChangePinComponent } from '../pages/cards/change-pin/change-pin.component';
import { DigitalActivityComponent } from '../pages/settings/digital-activity/digital-activity.component';
import { NewPaymentComponent } from '../pages/send-money/bank-transfer/new-payment/new-payment.component';

UtilityComponent

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'quick-actions',
    component:QuickActionsCreateComponent
  },
  {
    path:'overview',
    component:OverviewComponent
  },
  {
    path:'account-statement',
    component:AccountStatementComponent
  },
  {
    path:'orbit-statement',
    component:OrbitStatementComponent
  },
  {
    path:'debit-card',
    component:CardOverviewComponent
  },
  {
    path:'credit-card',
    component:CreditCardManagementComponent
  },
  {
    path:'empty-cards',
    component:EmptyCardComponent
  },
  {
    path:'activate-card',
    component:ActivateCardComponent
  },
  {
    path:'card/transaction-history',
    component:CardTransactionHistoryComponent
  },
  {
    path:'card/deals-discount',
    component:DealsDiscountComponent
  },
  {
    path:'mobile-topup',
    component:MobileTopUpComponent
  },
  {
    path:'mobile-topup/new-payee',
    component:NewPayeeComponent
  },
  {
    path:'payee-management',
    component:PayeeManagementComponent
  },
  {
    path:'payee-management/my-payee',
    component:MyPayeesComponent
  },
  {
    path:'my-payee/payee-details',
    component:PayeeDetailsComponent
  },
  {
    path:'payments/utility',
    component:UtilityComponent
  },
  {
    path:'send-money/bank-transfer',
    component: BankTransferComponent
  },
  {
    path:'send-money/bank-transfer/new-payment',
    component: NewPaymentComponent
  },
  {
    path:'settings',
    component: SettingsComponent
  },
  {
    path:'settings/scheduled-payments',
    component: ScheduledPaymentsComponent
  },
  {
    path:'settings/login-security',
    component: LoginSecurityComponent
  },
  {
    path:'settings/relationship-success',
    component: RelationshipSuccessComponent
  },
  {
    path:'settings/account-relationship',
    component: AccountRelationshipComponent
  },
  {
    path:'settings/profile',
    component: ProfileComponent
  },
  {
    path:'settings/appearance',
    component: AppearanceComponent
  },
  {
    path:'settings/language',
    component: LanguageComponent
  },
  {
    path:'settings/about-us',
    component: AboutUsComponent
  },
  {
    path:'settings/limit-managment',
    component: LimitManagementComponent
  },
  {
    path:'cool-off',
    component: CoolOffComponent
  },
  {
    path:'settings/raast-id',
    component: RaastQrComponent
  },
  {
    path:'card/credit-card-facility',
    component:CreditCardFacilityComponent
  },
  {
    path:'card/change-pin',
    component:ChangePinComponent
  },
  {
    path:'settings/digital-activity',
    component:DigitalActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
