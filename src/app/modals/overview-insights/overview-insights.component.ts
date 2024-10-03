import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { MatChipSelectionChange,MatChipsModule } from '@angular/material/chips';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, Legend } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-overview-insights',
  standalone: true,
  imports: [MatChipsModule,NgChartsModule],
  templateUrl: './overview-insights.component.html',
  styleUrl: './overview-insights.component.css'
})
export class OverviewInsightsComponent {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<OverviewInsightsComponent>) { }

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
  public pieChartLabels = [ 
    [ 'Mutual funds' ], 
    [ 'Term deposits' ], 
    [ 'Securities' ], 
    [ 'Current/saving deposits' ],
    [ 'PIBs, T-Bills, NPCs' ] 
  ];
  public pieChartDatasets = [ {
      data: [ 300, 500, 800, 1000, 240 ],
      backgroundColor: [
        '#FFA600',
        '#DD5182',
        '#955196',
        '#003F5C',
        '#444E86'
      ],
      hoverBackgroundColor:[
        '#FFA600',
        '#DD5182',
        '#955196',
        '#003F5C',
        '#444E86'
      ],
      hoverBorderColor:[
        '#FFA600',
        '#DD5182',
        '#955196',
        '#003F5C',
        '#444E86'
      ],
      datalabels:{
        color: 'white'
      },
    } 
  ];
  public pieChartLegend = false;
  public pieChartPlugins = [

  ];


  closeModal() {
    this.dialogRef.close();
  }

  onChange($event: any) {

    if($event.value == 'Earned'){
      // this.dataSource = ELEMENT_DATA_Earned
    }else if($event.value == 'Bonus'){
      // this.dataSource = ELEMENT_DATA_Bonus
    }else{
      // this.dataSource = ELEMENT_DATA_Earned
    }
  }

}
