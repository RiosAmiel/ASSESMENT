import { Component, OnInit } from '@angular/core';
import { IAccLoadedEventArgs, ChartTheme,  } from '@syncfusion/ej2-angular-charts'
import { Browser } from '@syncfusion/ej2-base';
import { DataService } from '../services/data.service';
import * as _ from "lodash";
import { Cars } from '../Models/models';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit { 
  public tooltip: Object = {
    enable: true,
    header: '',
    format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>'
 };

public legend: Object = {
    visible: true,
}
// custom code start
public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
};
// custom code end
public dataLabel: Object = {
  visible: true,
  name: 'stocks',
  position: 'Outside',
  font: {
      fontWeight: '600',
  },
  connectorStyle: { 
      length: '20px',
      type: 'Curve'
   }
};public startAngle: number = 0;
public endAngle: number = 360;
public title_V: string = 'Car Stocks';


  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.PullCars();
  }
  priceP!: number;
  Cars: Cars[] = []
  PullCars(){
    this.ds.getCars().subscribe((data:Cars[]) =>{ 
        for (let i in data) {
            this.priceP = data[i].stocks = parseFloat(data[i].stocks!.toString());
            this.Cars = data;
        }
      });
  }
}
