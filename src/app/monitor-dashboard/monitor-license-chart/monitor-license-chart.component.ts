import { Component } from '@angular/core';
import {
  NgApexchartsModule, ApexChart, ApexAxisChartSeries,
  ApexXAxis, ApexYAxis, ApexFill, ApexStroke,
  ApexTooltip, ApexLegend, ApexTitleSubtitle, ApexGrid
} from 'ng-apexcharts';
import { MONITOR_MOCK_DATA } from '../data/monitor.mock';
import { MonitorCardShellComponent } from '../monitor-card-shell/monitor-card-shell.component';

@Component({
  selector: 'md-license-chart',
  standalone: true,
  imports: [NgApexchartsModule, MonitorCardShellComponent],
  templateUrl: './monitor-license-chart.component.html',
  styleUrl: './monitor-license-chart.component.scss'
})
export class MonitorLicenseChartComponent {
  chartOptions: {
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
    series: MONITOR_MOCK_DATA.licenseSeries,
    chart: {
      type: 'line',
      height: 260,
      background: 'transparent',
      toolbar: { show: false },
      foreColor: '#607d8b',
    },
    xaxis: {
      categories: MONITOR_MOCK_DATA.licenseCategories,
      labels: { style: { colors: '#90a4ae' } },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 75,
      tickAmount: 5,
      labels: {
        style: { colors: '#90a4ae' },
        formatter: (val: number) => String(val)
      }
    },
    fill: {
      type: ['gradient', 'solid'],
      gradient: { shadeIntensity: 0.3, opacityFrom: 0.4, opacityTo: 0.05 }
    },
    stroke: {
      curve: 'smooth',
      width: [2, 3],
      dashArray: [0, 0]
    },
    tooltip: { theme: 'light' },
    legend: { labels: { colors: '#37474f' }, position: 'top' },
    title: {
      text: 'License Usage: Pending vs Consumed',
      style: { color: '#37474f', fontSize: '14px', fontWeight: '600' }
    },
    grid: { borderColor: '#eceff1', strokeDashArray: 4 },
    colors: ['#42A5F5', '#1565C0'],
  };
}
