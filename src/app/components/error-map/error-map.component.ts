import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-error-map',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './error-map.component.html',
  styleUrl: './error-map.component.scss'
})
export class ErrorMapComponent implements OnInit {
  chartOptions: {
    series: any[];
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    title: ApexTitleSubtitle;
    colors: string[];
  } = {
    series: [
      {
        data: [
          { x: 'SAP ERP', y: 148 },
          { x: 'Salesforce', y: 93 },
          { x: 'Oracle DB', y: 72 },
          { x: 'SFTP Connector', y: 55 },
          { x: 'REST API', y: 41 },
          { x: 'JMS Queue', y: 38 },
          { x: 'Email Service', y: 27 },
          { x: 'Legacy ERP', y: 19 },
        ]
      }
    ],
    chart: {
      type: 'treemap',
      height: 280,
      background: 'transparent',
      toolbar: { show: false },
      foreColor: '#9ca3af'
    },
    dataLabels: { enabled: true },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    },
    title: {
      text: 'Error Distribution by Connector',
      style: { color: '#e0e4f0', fontSize: '14px', fontWeight: '600' }
    },
    colors: ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7']
  };

  ngOnInit(): void {}
}
