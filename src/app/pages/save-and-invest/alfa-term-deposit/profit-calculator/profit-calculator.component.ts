import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-profit-calculator',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './profit-calculator.component.html',
  styleUrl: './profit-calculator.component.css'
})
export class ProfitCalculatorComponent {

}
