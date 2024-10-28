import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profit-calculator',
  standalone: true,
  imports: [MatChipsModule, RouterModule],
  templateUrl: './profit-calculator.component.html',
  styleUrl: './profit-calculator.component.css'
})
export class ProfitCalculatorComponent {

}
