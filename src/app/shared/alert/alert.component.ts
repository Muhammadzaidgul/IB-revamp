import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {


  @Input() alertType : any; // decorate the property with @Input()
  @Input() alertMsg;
  @Input() alertIcon; 
  background_color : any;
  font_color : any


  ngOnInit(): void {
    if (this.alertType == 'warning') {

      this.background_color = '#FFE6E6';
      this.font_color = '#990000';
    }

    else if(this.alertType == 'success'){
      this.background_color = '#18b368';
      this.font_color = '#fff';
    }
    // throw new Error('Method not implemented.');
  }

  
}
