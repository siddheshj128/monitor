import { Component } from '@angular/core';
import { MonitorNavbarComponent } from './monitor-navbar/monitor-navbar.component';
import { MonitorErrorMapComponent } from './monitor-error-map/monitor-error-map.component';
import { MonitorAlertsTableComponent } from './monitor-alerts-table/monitor-alerts-table.component';
import { MonitorLicenseChartComponent } from './monitor-license-chart/monitor-license-chart.component';
import { MonitorSidebarComponent } from './monitor-sidebar/monitor-sidebar.component';

@Component({
  selector: 'app-monitor-dashboard',
  standalone: true,
  imports: [
    MonitorNavbarComponent,
    MonitorErrorMapComponent,
    MonitorAlertsTableComponent,
    MonitorLicenseChartComponent,
    MonitorSidebarComponent,
  ],
  templateUrl: './monitor-dashboard.component.html',
  styleUrl: './monitor-dashboard.component.scss'
})
export class MonitorDashboardComponent {}
