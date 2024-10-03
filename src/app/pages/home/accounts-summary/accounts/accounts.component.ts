import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common'
import { NoAccountComponent } from "../../../empty-state/no-account/no-account.component";
  
@Component({
    selector: 'app-accounts',
    standalone: true,
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.css',
    imports: [SlickCarouselModule, CommonModule, NoAccountComponent]
})
export class AccountsComponent {

  constructor() { }

  ngOnInit(): void {
  }

  isAccountEmpty : boolean = false;

  accountsConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    // prevArrow: '<div class="d-flex justify-content-end"><button class="btn btn-outline-dark" style="height: 35px;"><</button></div>',
    // nextArrow: '<div class="d-flex justify-content-end"><button class="btn btn-dark" >></button></div>',
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

  accountsData2: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [{ 
        
        label: 'Deposits', 
        backgroundColor: 'rgb(218, 41, 28)',
        borderColor: 'rgb(255, 255, 255)',
        
        data: [150000, 95000, 208000, 56000, 80090, 296000], 
        
        fill: false,
        tension: 0.5,
        animation: {
          duration: 800,
          easing: 'linear',
          loop: (context) => context.active,
          
        },
        
      }],
    
  };

  accountsData1: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [{ 
        
        label: 'Deposits', 
        backgroundColor: 'rgb(218, 41, 28)',
        borderColor: 'rgb(255, 255, 255)',
        
        data: [25000, 75000, 200000, 3000, 180000, 26000], 
        
        fill: false,
        tension: 0.5,
        animation: {
          duration: 800,
          easing: 'linear',
          loop: (context) => context.active,
          
        },
        
      }],
    
  };

  accounts = [
    { amount: '82,900', accountNumber:'99108987862278', accountType:'Alfalah Current Account', chartData:this.accountsData1 , defaultAcc : 'true' },
    { amount: '25,00,000', accountNumber:'00331234567890', accountType:'Alfalah PKR Saving Account', chartData:this.accountsData2, defaultAcc : 'false' },
  ];

  accountschartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    
    scales:{
        x:{
          grid:{
            
            display: false,
          },
          ticks:{
            color: 'rgb(255, 255, 255)',
          }
        },
        y:{
          grid:
          {
            
            display: false,
          },
          ticks:{
            color: 'rgb(255, 255, 255)',
          }
        }
    },
    plugins: {
      title: {
        display: false,
        text: 'Monthly Deposits',
        color: 'rgb(255, 255, 255)',
      },
      legend: {
        display: false,
        labels: {
            color: 'rgb(255, 255, 255)'
          
        }
      },
      
    },
  };

}
