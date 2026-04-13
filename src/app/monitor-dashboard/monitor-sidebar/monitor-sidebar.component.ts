import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MONITOR_MOCK_DATA } from '../data/monitor.mock';
import { StatWidget } from '../models/monitor.models';
import { MonitorStatWidgetComponent } from '../monitor-stat-widget/monitor-stat-widget.component';

@Component({
  selector: 'md-sidebar',
  standalone: true,
  imports: [CommonModule, MonitorStatWidgetComponent],
  templateUrl: './monitor-sidebar.component.html',
  styleUrl: './monitor-sidebar.component.scss'
})
export class MonitorSidebarComponent {
  stats: StatWidget[] = MONITOR_MOCK_DATA.stats;
}
