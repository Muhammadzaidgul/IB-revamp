import { Component,Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-auth-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './auth-progress-bar.component.html',
  styleUrl: './auth-progress-bar.component.css'
})
export class AuthProgressBarComponent {

  @Input() progressValue = 10; // decorate the property with @Input()

}
