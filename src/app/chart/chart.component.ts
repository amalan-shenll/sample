import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'pie';
  chartTypes = [{
      short: "line",
      label: "Line Chart"
    },{
      short: "pie",
      label: "Pie Chart"
    },{
      short:"polarArea",
      label: "Polar Chart"
    },{
      short:"radar",
      label:"Radar Chart"
    },{
      short:"doughnut",
      label:"Doughnut Chart"
    },{
      short:"bar",
      label:"Bar Chart"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  setChart(chartType){
    this.lineChartType=chartType;
  }

}
