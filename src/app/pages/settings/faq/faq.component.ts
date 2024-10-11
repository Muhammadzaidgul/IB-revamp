import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatChipsModule, CdkAccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  items_account = ['How do I open a new account?', 'What do I do if I have forgotten my username/password?', 'How can I update my contact information?'];
  expandedIndex = 0;

  items_transactions = ['How can I view my transaction history?', 'What should I do if I see an unauthorized transaction?', 'Is there a limit on daily transactions?'];


  back():void{
    this.location.back();
  }

  constructor(private location: Location){

  }





}
