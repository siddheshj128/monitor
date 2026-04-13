import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ErrorMapComponent } from '../components/error-map/error-map.component';
import { AlertsTableComponent } from '../components/alerts-table/alerts-table.component';
import { LicenseChartComponent } from '../components/license-chart/license-chart.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-monitor-legacy-shell',
  standalone: true,
  imports: [NavbarComponent, ErrorMapComponent, AlertsTableComponent, LicenseChartComponent, SidebarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="dashboard">
      <main class="main-area">
        <app-error-map></app-error-map>
        <app-alerts-table></app-alerts-table>
        <app-license-chart></app-license-chart>
      </main>
      <aside class="sidebar-area">
        <app-sidebar></app-sidebar>
      </aside>
    </div>
  `,
  styles: [`
    .dashboard {
      display: grid;
      grid-template-columns: 1fr 20%;
      gap: 1rem;
      padding: 1rem;
      height: calc(100vh - 56px);
      box-sizing: border-box;
      overflow: hidden;
    }
    .main-area {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow-y: auto;
      padding-right: 0.25rem;
    }
    .sidebar-area { overflow-y: auto; }
    @media (max-width: 1024px) {
      .dashboard { grid-template-columns: 1fr; height: auto; }
      .sidebar-area { order: -1; }
    }
  `]
})
export class MonitorLegacyShellComponent {}
