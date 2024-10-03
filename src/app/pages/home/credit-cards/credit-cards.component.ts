import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CommonModule } from '@angular/common'
import { QuickActionsComponent } from "../quick-actions/quick-actions.component";
import { QuickTransferComponent } from "../quick-transfer/quick-transfer.component";
import { NoCreditCardComponent } from "../../empty-state/no-credit-card/no-credit-card.component";

@Component({
    selector: 'app-credit-cards',
    standalone: true,
    templateUrl: './credit-cards.component.html',
    styleUrl: './credit-cards.component.css',
    imports: [SlickCarouselModule, ProgressbarModule, CommonModule, QuickActionsComponent, QuickTransferComponent, NoCreditCardComponent]
})
export class CreditCardsComponent {
  dynamic = 156000;
  max = 200000;
  isCardEmpty :  boolean = true;
  cards = [
    { cardPerson: 'Muhammad Zaid Gul', cardNumber:'5342 *** **** *** 7867', img:'assets/img/credit-cards/Card@2x.png', totalAmountDue:'25,000' },
    { cardPerson: 'Sarim Naeem', cardNumber:'4221 *** **** *** 4519', img:'assets/img/credit-cards/Card@2x-2.png',totalAmountDue:'80,000' },
  ];

  creditcardConfig = { 
  slidesToShow: 1, 
  slidesToScroll: 1,
  //  prevArrow: '<div class="ccPrevBtn"><i class="fa fa-arrow-alt-circle-left fa-lg "></i></div>',
  //   nextArrow: '<div class="ccNextBtn"><i class="fa fa-arrow-alt-circle-right fa-lg"></i></div>',
  responsive: [
    {
      breakpoint: 980, //tablet view
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, //mobile view
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  };
}
