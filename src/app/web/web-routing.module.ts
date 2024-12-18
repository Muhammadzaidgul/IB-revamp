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
import { NewUtilityPaymentComponent } from '../pages/payments/utility/new-utility-payment/new-utility-payment.component';
import { DonationsComponent } from '../pages/payments/donations/donations.component';
import { MorePaymentsComponent } from '../pages/payments/more-payments/more-payments.component';
import { CreditCardPaymentsComponent } from '../pages/payments/credit-card-payments/credit-card-payments.component';
import { PostPaidComponent } from '../pages/mobile-top-up/post-paid/post-paid.component';
import { PackagesComponent } from '../pages/mobile-top-up/packages/packages.component';
import { AlfaHubComponent } from '../pages/alfa-hub/alfa-hub.component';
import { ShophiveComponent } from '../pages/alfa-hub/shophive/shophive.component';
import { FaqComponent } from '../pages/settings/faq/faq.component';
import { ComplaintsComponent } from '../pages/settings/complaints/complaints.component';
import { NewComplaintComponent } from '../pages/settings/complaints/new-complaint/new-complaint.component';
import { ComplaintSuccessComponent } from '../pages/settings/complaints/complaint-success/complaint-success.component';
import { RateExperienceComponent } from '../pages/settings/complaints/rate-experience/rate-experience.component';
import { SaveAndInvestComponent } from '../pages/save-and-invest/save-and-invest.component';
import { AlfaTermDepositComponent } from '../pages/save-and-invest/alfa-term-deposit/alfa-term-deposit.component';
import { IpsComponent } from '../pages/save-and-invest/ips/ips.component';
import { NetAssetValueComponent } from '../pages/save-and-invest/net-asset-value/net-asset-value.component';
import { StockMarketComponent } from '../pages/save-and-invest/stock-market/stock-market.component';
import { SummaryComponent } from '../pages/save-and-invest/summary/summary.component';
import { TopPerformingFundsComponent } from '../pages/save-and-invest/top-performing-funds/top-performing-funds.component';
import { ProfitCalculatorComponent } from '../pages/save-and-invest/alfa-term-deposit/profit-calculator/profit-calculator.component';
import { BookATermDepositComponent } from '../pages/save-and-invest/alfa-term-deposit/book-a-term-deposit/book-a-term-deposit.component';
import { YourTermDepositComponent } from '../pages/save-and-invest/alfa-term-deposit/your-term-deposit/your-term-deposit.component';
import { RaastComponent } from '../pages/send-money/raast/raast.component';
import { ApplyNewLoanComponent } from '../pages/loans/apply-new-loan/apply-new-loan.component';
import { LoanSuccessComponent } from '../pages/loans/apply-new-loan/success/loan-success.component';
import { ManageLoansComponent } from '../pages/loans/manage-loans/manage-loans.component';
import { TaxManagementComponent } from '../pages/alfa-hub/digital-services/tax-management/tax-management.component';
import { BankersChequeComponent } from '../pages/alfa-hub/digital-services/bankers-cheque/bankers-cheque.component';
import { ApplyChequeBookPageComponent } from '../pages/alfa-hub/digital-services/cheque-management/apply-cheque-book-page/apply-cheque-book-page.component';
import { UpdateCnicComponent } from '../pages/alfa-hub/digital-services/update-cnic/update-cnic.component';
import { AccountMaintenanceCertificateComponent } from '../pages/alfa-hub/digital-services/account-maintenance-certificate/account-maintenance-certificate.component';
import { StopChequeComponent } from '../pages/alfa-hub/digital-services/stop-cheque/stop-cheque.component';
import { RegisterSuccessComponent } from '../pages/settings/relationship/register-success/register-success.component';
import { RelationshipUnlinkSuccessComponent } from '../pages/settings/relationship/relationship-unlink-success/relationship-unlink-success.component';
import { ChequeSubmitComponent } from '../pages/alfa-hub/digital-services/bankers-cheque/cheque-submit/cheque-submit.component';
import { WithHoldingTaxCertificateComponent } from '../pages/alfa-hub/digital-services/tax-management/with-holding-tax-certificate/with-holding-tax-certificate.component';
import { WithHoldingTaxStatementComponent } from '../pages/alfa-hub/digital-services/tax-management/with-holding-tax-statement/with-holding-tax-statement.component';
import { PrepaidComponent } from '../pages/mobile-top-up/prepaid/prepaid.component';
import { SuccessComponent } from '../shared/success/success.component';


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
    path:'prepaid-top-up',
    component:PrepaidComponent
  },
  {
    path:'mobile-topup/post-paid',
    component:PostPaidComponent 
  },
  {
    path:'mobile-topup/packages',
    component:PackagesComponent  
  },
  {
    path:'mobile-topup/new-payee/:new_payment',
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
    path:'payments/donations',
    component:DonationsComponent
  },
  {
    path:'payments/credit-cards',
    component:CreditCardPaymentsComponent
  },
  {
    path:'payments/utility/new-payment',
    component:NewUtilityPaymentComponent 
  },
  {
    path:'payments/more-payments',
    component:MorePaymentsComponent
  },
  {
    path:'send-money/bank-transfer',
    component: BankTransferComponent
  },
  {
    path:'send-money/raast',
    component: RaastComponent
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
    path:'save-and-invest',
    component: SaveAndInvestComponent
  },
  {
    path:'save-and-invest/alfa-term-deposit',
    component: AlfaTermDepositComponent 
  },
  {
    path:'save-and-invest/alfa-term-deposit/profit-calculator',
    component: ProfitCalculatorComponent  
  },
  {
    path:'save-and-invest/alfa-term-deposit/book-a-term-deposit',
    component: BookATermDepositComponent   
  },
  {
    path:'save-and-invest/alfa-term-deposit/your-term-deposit',
    component: YourTermDepositComponent   
  },
  {
    path:'save-and-invest/ips',
    component: IpsComponent
  },
  {
    path:'save-and-invest/net-asset-value',
    component: NetAssetValueComponent
  },
  {
    path:'save-and-invest/stock-market',
    component: StockMarketComponent
  },
  {
    path:'save-and-invest/summary',
    component: SummaryComponent
  },
  {
    path:'save-and-invest/top-performing-funds',
    component: TopPerformingFundsComponent
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
    path:'settings/relationship-link-success',
    component: RelationshipSuccessComponent
  },
  {
    path:'settings/relationship-unlink-success',
    component: RelationshipUnlinkSuccessComponent
  },
  {
    path:'settings/relationship-register-success',
    component: RegisterSuccessComponent
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
    path:'settings/faq',
    component: FaqComponent  
  },
  {
    path:'settings/complaints',
    component: ComplaintsComponent  
  },  
  {
    path:'settings/complaints/new-complaint',
    component: NewComplaintComponent   
  },
  {
    path:'settings/complaints/complaint-success',
    component: ComplaintSuccessComponent  
  },
  {
    path:'settings/complaints/rate-experience',
    component: RateExperienceComponent  
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
  },
  {
    path:'alfa-hub/digital-activity',
    component:AlfaHubComponent
  },
  {
    path:'alfa-hub/shophive',
    component:ShophiveComponent 
  }
  ,
  {
    path:'alfa-hub/tax-management',
    component:TaxManagementComponent  
  }
  ,
  {
    path:'alfa-hub/bankerscheque',
    component:BankersChequeComponent  
  }
  ,
  {
    path:'alfa-hub/bankerscheque/submit-success',
    component:ChequeSubmitComponent  
  }
  ,
  {
    path:'alfa-hub/apply-cheque-book',
    component: ApplyChequeBookPageComponent  
  }
  ,
  {
    path:'alfa-hub/stop-cheque',
    component: StopChequeComponent
  }
  ,
  {
    path:'alfa-hub/update-cnic',
    component: UpdateCnicComponent 
  }
  ,
  {
    path:'alfa-hub/account-maintenance-certificate',
    component: AccountMaintenanceCertificateComponent  
  }
  ,
  {
    path:'loans/apply-new-loan',
    component:ApplyNewLoanComponent
  }
  ,
  {
    path:'loans/apply-new-loan/success',
    component: LoanSuccessComponent
  }
  ,
  {
    path:'loans/manage-loans',
    component: ManageLoansComponent 
  }
  ,
  {
    path:'tax-management/withholdingtax-certificate',
    component: WithHoldingTaxCertificateComponent  
  }
  ,
  {
    path:'tax-management/withholdingtax-statement',
    component: WithHoldingTaxStatementComponent  
  },
  {
    path: 'success',
    component: SuccessComponent
  }

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
