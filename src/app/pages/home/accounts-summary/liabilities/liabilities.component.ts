import { Component,OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, Legend } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { NoLiabilityComponent } from "../../../empty-state/no-liability/no-liability.component";

@Component({
    selector: 'app-liabilities',
    standalone: true,
    templateUrl: './liabilities.component.html',
    styleUrl: './liabilities.component.css',
    imports: [NgChartsModule, NoLiabilityComponent]
})
export class LiabilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLiabilityEmpty : boolean = false;
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
    public pieChartLabels = [ [ 'Credit Card' ], [ 'Home finance' ], [ 'Auto finance' ] ];
    public pieChartDatasets = [ {
        data: [ 300, 500, 800 ],
        backgroundColor: [
          '#DD5182',
          '#FFA600',
          '#955196'
        ],
        hoverBackgroundColor:[
          '#DD5182',
          '#FFA600',
          '#955196'
        ],
        hoverBorderColor:[
          '#DD5182',
          '#FFA600',
          '#955196'
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
