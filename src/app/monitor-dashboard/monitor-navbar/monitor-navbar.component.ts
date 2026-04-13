import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'md-navbar',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './monitor-navbar.component.html',
  styleUrl: './monitor-navbar.component.scss'
})
export class MonitorNavbarComponent {
  currentDate = new Date();
  environment = 'Production';
  status = 'Online';
}
