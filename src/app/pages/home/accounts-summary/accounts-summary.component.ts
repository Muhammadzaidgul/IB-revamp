import { Component } from '@angular/core';
import { AccountsComponent } from "./accounts/accounts.component";
import { DepositsComponent } from "./deposits/deposits.component";
import { LiabilitiesComponent } from "./liabilities/liabilities.component";

@Component({
    selector: 'app-accounts-summary',
    standalone: true,
    templateUrl: './accounts-summary.component.html',
    styleUrl: './accounts-summary.component.css',
    imports: [AccountsComponent, DepositsComponent, LiabilitiesComponent]
})
export class AccountsSummaryComponent {

}
