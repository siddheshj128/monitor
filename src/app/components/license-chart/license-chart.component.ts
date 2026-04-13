import { Component } from '@angular/core';
import { NgApexchartsModule, ApexChart, ApexAxisChartSeries, ApexXAxis, ApexYAxis, ApexFill, ApexStroke, ApexTooltip, ApexLegend, ApexTitleSubtitle, ApexGrid } from 'ng-apexcharts';

@Component({
  selector: 'app-license-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './license-chart.component.html',
  styleUrl: './license-chart.component.scss'
})
export class LicenseChartComponent {
  months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  areaOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    fill: ApexFill;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    grid: ApexGrid;
    colors: string[];
  } = {
    series: [
      { name: 'Active Licenses',    data: [820, 850, 900, 870, 920, 980, 1010] },
      { name: 'Available Licenses', data: [1200, 1200, 1200, 1200, 1200, 1200, 1200] },
    ],
    chart: { type: 'area', height: 200, background: 'transparent', toolbar: { show: false }, foreColor: '#9ca3af', sparkline: { enabled: false } },
    xaxis: { categories: this.months, labels: { style: { colors: '#6b7280' } }, axisBorder: { show: false } },
    yaxis: { labels: { style: { colors: '#6b7280' } } },
    fill: { type: 'gradient', gradient: { shadeIntensity: .3, opacityFrom: .5, opacityTo: .05 } },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: { theme: 'dark' },
    legend: { labels: { colors: '#9ca3af' } },
    title: { text: 'License Usage Trend', style: { color: '#e0e4f0', fontSize: '14px', fontWeight: '600' } },
    grid: { borderColor: '#2d3448', strokeDashArray: 4 },
    colors: ['#3b82f6', '#22c55e']
  };

  barOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    grid: ApexGrid;
    plotOptions: any;
    colors: string[];
  } = {
    series: [
      { name: 'Integration',  data: [320, 340, 360, 330, 380, 410, 430] },
      { name: 'Adapter',      data: [250, 260, 270, 280, 290, 300, 310] },
      { name: 'Monitoring',   data: [250, 250, 270, 260, 250, 270, 270] },
    ],
    chart: { type: 'bar', height: 200, stacked: true, background: 'transparent', toolbar: { show: false }, foreColor: '#9ca3af' },
    xaxis: { categories: this.months, labels: { style: { colors: '#6b7280' } }, axisBorder: { show: false } },
    yaxis: { labels: { style: { colors: '#6b7280' } } },
    fill: { opacity: .9 },
    tooltip: { theme: 'dark' },
    legend: { labels: { colors: '#9ca3af' }, position: 'bottom' },
    title: { text: 'License Usage by Type', style: { color: '#e0e4f0', fontSize: '14px', fontWeight: '600' } },
    grid: { borderColor: '#2d3448', strokeDashArray: 4 },
    plotOptions: { bar: { borderRadius: 3, columnWidth: '55%' } },
    colors: ['#3b82f6', '#a855f7', '#f97316']
  };
}
