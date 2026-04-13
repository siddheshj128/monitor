import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AlertItem } from '../models/monitor.models';
import { MONITOR_MOCK_DATA } from '../data/monitor.mock';
import { MonitorCardShellComponent } from '../monitor-card-shell/monitor-card-shell.component';

@Component({
  selector: 'md-alerts-table',
  standalone: true,
  imports: [CommonModule, DatePipe, MonitorCardShellComponent],
  templateUrl: './monitor-alerts-table.component.html',
  styleUrl: './monitor-alerts-table.component.scss'
})
export class MonitorAlertsTableComponent {
  alerts: AlertItem[] = MONITOR_MOCK_DATA.alerts;

  filterStatus = 'All';
  filters = ['All', 'Open', 'In Progress', 'Resolved'];

  get filtered(): AlertItem[] {
    if (this.filterStatus === 'All') return this.alerts;
    return this.alerts.filter(a => a.status === this.filterStatus);
  }
}
