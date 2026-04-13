import { Component, OnInit } from '@angular/core';
import {
  NgApexchartsModule, ApexChart, ApexDataLabels,
  ApexPlotOptions, ApexTitleSubtitle, ApexTooltip
} from 'ng-apexcharts';
import { MONITOR_MOCK_DATA } from '../data/monitor.mock';
import { MonitorCardShellComponent } from '../monitor-card-shell/monitor-card-shell.component';

@Component({
  selector: 'md-error-map',
  standalone: true,
  imports: [NgApexchartsModule, MonitorCardShellComponent],
  templateUrl: './monitor-error-map.component.html',
  styleUrl: './monitor-error-map.component.scss'
})
export class MonitorErrorMapComponent implements OnInit {
  chartOptions: {
    series: any[];
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    colors: string[];
  } = {
    series: [{ data: MONITOR_MOCK_DATA.treemapItems }],
    chart: {
      type: 'treemap',
      height: 300,
      background: 'transparent',
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      style: { fontSize: '13px', fontWeight: '600', colors: ['#fff'] }
    },
    plotOptions: {
      treemap: { distributed: true, enableShades: false }
    },
    title: {
      text: 'Project Error Distribution',
      style: { color: '#37474f', fontSize: '14px', fontWeight: '600' }
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          if (val >= 1000000) return `${(val / 1000000).toFixed(0)}M`;
          if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
          return String(val);
        }
      }
    },
    colors: ['#1565C0', '#1976D2', '#42A5F5', '#E64A19', '#FF7043']
  };

  ngOnInit(): void {}
}
