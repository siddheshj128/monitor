import { Component } from '@angular/core';
import { NgApexchartsModule, ApexChart, ApexAxisChartSeries, ApexStroke, ApexFill } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

interface StatCard {
  label: string;
  value: string | number;
  sub?: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  color: string;
  spark: number[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  stats: StatCard[] = [
    { label: 'Total Transactions',  value: '48,291', sub: 'Today',      trend: 'up',      trendValue: '+12%', color: '#3b82f6', spark: [30,45,40,55,60,52,70,80,75,90] },
    { label: 'Success Rate',        value: '98.4%',  sub: 'Last 24h',   trend: 'up',      trendValue: '+0.3%', color: '#22c55e', spark: [90,92,91,95,96,94,97,98,98,99] },
    { label: 'Active Flows',        value: 247,      sub: 'Running',    trend: 'neutral', trendValue: '0%',   color: '#a855f7', spark: [240,243,245,241,248,246,247,250,247,247] },
    { label: 'Errors (24h)',        value: 38,       sub: 'Vs 52 prev', trend: 'down',    trendValue: '-27%', color: '#ef4444', spark: [50,48,55,52,47,45,40,42,38,38] },
    { label: 'Avg Response',        value: '142ms',  sub: 'P95: 380ms', trend: 'down',    trendValue: '-8ms', color: '#f97316', spark: [160,155,162,150,148,145,143,142,141,142] },
    { label: 'License Utilization', value: '84%',    sub: '1010 / 1200',trend: 'up',      trendValue: '+2%',  color: '#06b6d4', spark: [78,79,80,81,82,82,83,84,84,84] },
  ];

  sparkOptions(spark: number[], color: string): { series: ApexAxisChartSeries; chart: ApexChart; stroke: ApexStroke; fill: ApexFill; colors: string[] } {
    return {
      series: [{ data: spark }],
      chart: { type: 'area', height: 50, sparkline: { enabled: true }, background: 'transparent' },
      stroke: { curve: 'smooth', width: 2 },
      fill:   { type: 'gradient', gradient: { shadeIntensity: .4, opacityFrom: .4, opacityTo: .0 } },
      colors: [color]
    };
  }
}
