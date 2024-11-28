import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedDataService } from '../../shared-data.service';


@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  
  pageHeading : string;
  icon : string;
  mainHeading : string;
  subText : string;
  btnText : string;
  btnIcon : string;
  btnUrl :  string;

  constructor(private sharedData: SharedDataService) { 
    this.sharedData.data$.subscribe((data)=>{

      this.pageHeading = data['pageHeading'];
      this.icon = data['icon'];
      this.mainHeading = data['mainHeading'];
      this.subText = data['subText'];
      this.btnText = data['btnText'];
      this.btnIcon = data['btnIcon'];
      this.btnUrl = data['btnUrl'];

    })
  }

}
