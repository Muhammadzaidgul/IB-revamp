import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, Legend } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { NoDepositsComponent } from "../../../empty-state/no-deposits/no-deposits.component";

@Component({
    selector: 'app-deposits',
    standalone: true,
    templateUrl: './deposits.component.html',
    styleUrl: './deposits.component.css',
    imports: [NgChartsModule, NoDepositsComponent]
})
export class DepositsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isDepositEmpty : boolean = true;
  // Pie
  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      }
    }
  };
  public pieChartLabels = [ [ 'Total Deposits' ], [ 'TDRs' ] ];
  public pieChartDatasets = [ {
      data: [ 300, 500 ],
      backgroundColor: [
        '#DD5182',
        '#FFA600'
      ],
      hoverBackgroundColor:[
        '#DD5182',
        '#FFA600'
      ],
      hoverBorderColor:[
        '#DD5182',
        '#FFA600'
      ],
      datalabels:{
        color: 'white'
      },
    } 
  ];
  public pieChartLegend = false;
  public pieChartPlugins = [

  ];


}
