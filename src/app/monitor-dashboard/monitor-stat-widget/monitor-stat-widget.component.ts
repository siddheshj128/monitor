import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ApexChart, ApexAxisChartSeries, ApexStroke, ApexFill } from 'ng-apexcharts';
import { StatWidget } from '../models/monitor.models';
import { MonitorCardShellComponent } from '../monitor-card-shell/monitor-card-shell.component';

@Component({
  selector: 'md-stat-widget',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, MonitorCardShellComponent],
  templateUrl: './monitor-stat-widget.component.html',
  styleUrl: './monitor-stat-widget.component.scss'
})
export class MonitorStatWidgetComponent {
  @Input({ required: true }) stat!: StatWidget;

  get sparkOpts(): { series: ApexAxisChartSeries; chart: ApexChart; stroke: ApexStroke; fill: ApexFill; colors: string[] } {
    return {
      series: [{ data: this.stat.spark }],
      chart: { type: 'area', height: 48, sparkline: { enabled: true }, background: 'transparent' },
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { shadeIntensity: 0.4, opacityFrom: 0.35, opacityTo: 0.0 } },
      colors: [this.stat.color]
    };
  }
}
