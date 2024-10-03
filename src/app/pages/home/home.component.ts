import { Component } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { AccountsSummaryComponent } from "./accounts-summary/accounts-summary.component";
import { CreditCardsComponent } from "./credit-cards/credit-cards.component";
import { RecentTransactionsComponent } from "./recent-transactions/recent-transactions.component";
import { DueBillsComponent } from "./due-bills/due-bills.component";
import { BannerComponent } from "./banner/banner.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent, HeaderComponent, AccountsSummaryComponent, CreditCardsComponent, RecentTransactionsComponent, DueBillsComponent, BannerComponent]
})
export class HomeComponent {

}
