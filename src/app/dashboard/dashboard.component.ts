import { Component, AfterViewInit } from '@angular/core';
@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
    subtitle: string;
    constructor() {
        this.subtitle = 'This is some text within a card block.'
    }

    // lineChart
    public lineChartData: Array<any> = [
        { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
        { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' },
        { data: [20, 80, 70, 140, 140, 80, 200], label: 'Marketing' }
    ];

    public lineChartLabels: Array<any> = [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
    ];
    public lineChartOptions: any = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        color: 'rgba(120, 130, 140, 0.13)'
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(120, 130, 140, 0.13)'
                    }
                }
            ]
        },
        lineTension: 10,
        responsive: true,
        maintainAspectRatio: false
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(36,210,181,0)',
            borderColor: 'rgba(36,210,181,1)',
            pointBackgroundColor: 'rgba(36,210,181,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(36,210,181,0.5)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(32,174,227,0)',
            borderColor: 'rgba(32,174,227,1)',
            pointBackgroundColor: 'rgba(32,174,227,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(32,174,227,0.5)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(103,114,229,0)',
            borderColor: 'rgba(103,114,229,1)',
            pointBackgroundColor: 'rgba(103,114,229,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(103,114,229,0.5)'
        }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';

    // Doughnut
    public doughnutChartLabels: string[] = ['Tablet', 'Desktops', 'Mobile'];

    public doughnutChartOptions: any = {
        responsive: false,
        maintainAspectRatio: false,
        percentageInnerCutout: 90
    };

    // public doughnutOptions: any = {
    //     percentageInnerCutout: 90,
    // };
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType = 'doughnut';
    ngAfterViewInit() { }

}