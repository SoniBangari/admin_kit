import { Component,Input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
cards=[
  {
    title: "Sales",
    money:"2.382",
    percent:"-3.65%",
    theme:"danger",
    icon:"truck",
  },
  {
    title: "Earnings",
    money:"$21.300",
    percent:"6.65%",
    theme:"success",
    icon:"users",
  },
  {
    title: "Visitors",
    money:"14.212",
    percent:"5.25%",
    theme:"success",
    icon:"dollar-sign",
  },
  {
    title: "Orders",
    money:"64",
    percent:"-2.25%",
    theme:"danger",
    icon:"shopping-cart",
  },
];
public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      data: [ 2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327],
      label: 'Series A',
      fill: true,
      tension: 0.5,
      borderColor: 'blue',
      backgroundColor: 'rgba(173, 216, 2300.3)'
    }
  ]
};
public lineChartOptions: ChartOptions<'line'> = {
  responsive: false
};
public lineChartLegend = true;

constructor() {
}

}
