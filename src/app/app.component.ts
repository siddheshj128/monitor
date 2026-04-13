import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorMapComponent } from './components/error-map/error-map.component';
import { AlertsTableComponent } from './components/alerts-table/alerts-table.component';
import { LicenseChartComponent } from './components/license-chart/license-chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ErrorMapComponent, AlertsTableComponent, LicenseChartComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
