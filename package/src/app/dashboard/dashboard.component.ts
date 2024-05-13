import { Component, ViewChild } from '@angular/core';

import {
ApexAxisChartSeries,
ApexChart,
ChartComponent,
ApexDataLabels,
ApexPlotOptions,
ApexYAxis,
ApexLegend,
ApexStroke,
ApexXAxis,
ApexFill,
ApexGrid,
ApexTooltip,
NgApexchartsModule,
} from "ng-apexcharts";

export type saleschartchartOptions = {
series: ApexAxisChartSeries | any;
chart: ApexChart | any;
dataLabels: ApexDataLabels | any;
plotOptions: ApexPlotOptions | any;
yaxis: ApexYAxis | any;
xaxis: ApexXAxis | any;
fill: ApexFill | any;
grid: ApexGrid | any;
tooltip: ApexTooltip | any;
stroke: ApexStroke | any;
legend: ApexLegend | any;
markers: ApexLegend | any;
colors: string[] | any;
};


export type ourvisitorschartOptions = {
series: ApexAxisChartSeries | any;
chart: ApexChart | any;
dataLabels: ApexDataLabels | any;
plotOptions: ApexPlotOptions | any;
tooltip: ApexTooltip | any;
stroke: ApexStroke | any;
legend: ApexLegend | any;
markers: ApexLegend | any;
colors: string[] | any;
labels: string[] | any;
};

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    @ViewChild("saleschartchartOptions") chart: ChartComponent = Object.create(null);
    public saleschartchartOptions: Partial<saleschartchartOptions>;

    @ViewChild("ourvisitorschartOptions") chart2: ChartComponent = Object.create(null);
    public ourvisitorschartOptions: Partial<ourvisitorschartOptions>;


    subtitle: string;
    constructor() {

        this.saleschartchartOptions = {
            series: [
              {
              
                name: "Sales",
                data: [50, 130, 80, 70, 180, 105, 250]
              },
              {
                name: "Earnings",
                data: [80, 100, 60, 200, 150, 100, 150]
              },
              {
                name: "Marketing",
                data: [20, 80, 70, 140, 140, 80, 200]
              },
            ],
            dataLabels: {
              enabled: false
            },
            colors:['rgba(36,210,181,0)', 'rgba(32,174,227,0)', 'rgba(103,114,229,0)'],
            chart: {
              fontFamily: "Poppins, sans-serif",
              foreColor: "#adb0bb",
              height: 350,
              type: "area",
              toolbar: {
                show: false,
              },
              stacked: false
            },
            grid: {
              show: true,
              xaxis: {
                lines: {
                  show: false
                }
              },   
              yaxis: {
                lines: {
                  show: true
                }
              },  
            },
            legend: {
              show: false,
            },
            stroke: {
              width: 0,
              curve: "smooth",
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                gradientToColors: ["#6993ff"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
              },
            },
            markers: {
              size: 3,
              strokeColors: 'transparant',
            },
            xaxis: {
              labels: {
                show: true,
              },
              type: 'category',
                categories: [
                  "2011", "2012", "2013", "2014", "2015", "2016", "2017"
                ],
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: true,
              },
             
            },
            yaxis: {
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: true,
              },
              labels: {
                show: true,
              },
            },
            tooltip: {
              theme: "dark",
              fillSeriesColor: true,
            },
        };

        this.ourvisitorschartOptions = {
            series: [350, 450, 100],
            labels: ["Tablet", "Desktops", "Mobile"],
            chart: {
              type: "donut",
              height: 270,
              fontFamily: "Plus Jakarta Sans', sans-serif",
              foreColor: "#adb0bb",
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%',
                  background: 'transparent',
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      offsetY: 7,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              show: true,
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            colors: ["#7460ee", "#24d2b5", "#20aee3"],
            tooltip: {
              theme: "dark",
              fillSeriesColor: false,
            },
          };

          
        this.subtitle = 'This is some text within a card block.'
    }
    ngAfterViewInit() { }

    

}