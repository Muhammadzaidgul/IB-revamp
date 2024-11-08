import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {CdkAccordionModule} from '@angular/cdk/accordion';

interface faqs{
  id:number,
  question:string,
  answer:string,
  type:string,
}

const faqlist : faqs[] = [
  { 
    id:1, 
    question: 'How do I open a new account?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Account-Management'
  },
  { 
    id:2, 
    question: 'What do I do if I have forgotten my username/password?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Account-Management'
  },
  { 
    id:3, 
    question: 'How can I update my contact information?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Account-Management'
  },
  { 
    id:4, 
    question: 'How can I view my transaction history?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Transactions'
  },
  { 
    id:5, 
    question: 'What should I do if I see an unauthorized transaction?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Transactions'
  },
  { 
    id:6, 
    question: 'Is there a limit on daily transactions?', 
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?', 
    type:'Transactions'
  }
];

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatChipsModule, CdkAccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  myFAQS = [...faqlist];

  items_account = ['How do I open a new account?', 'What do I do if I have forgotten my username/password?', 'How can I update my contact information?'];
  expandedIndex = 0;

  items_transactions = ['How can I view my transaction history?', 'What should I do if I see an unauthorized transaction?', 'Is there a limit on daily transactions?'];


  back():void{
    this.location.back();
  }

  constructor(private location: Location){

  }

  onChange($event: any) {

    if($event.value == 'Account management'){
      
      this.myFAQS = [...faqlist.filter((payee) => payee.type == "Account-Management")];

    }else if($event.value == 'Transactions'){
      
      this.myFAQS = [...faqlist.filter((payee) => payee.type == "Transactions")];

    }else if($event.value == 'Card services'){
      this.myFAQS = [...faqlist.filter((payee) => payee.type == "card-service")];
    }
    else{
      this.myFAQS = [...faqlist];
    }
  }





}
