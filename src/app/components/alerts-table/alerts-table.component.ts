import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface Alert {
  id: string;
  timestamp: Date;
  service: string;
  type: 'Error' | 'Warning' | 'Info';
  message: string;
  status: 'Open' | 'Resolved' | 'In Progress';
}

@Component({
  selector: 'app-alerts-table',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './alerts-table.component.html',
  styleUrl: './alerts-table.component.scss'
})
export class AlertsTableComponent {
  alerts: Alert[] = [
    { id: 'ALT-001', timestamp: new Date('2026-04-13T10:15:00'), service: 'SAP ERP',       type: 'Error',   message: 'Connection timeout after 30s',      status: 'Open'        },
    { id: 'ALT-002', timestamp: new Date('2026-04-13T10:02:00'), service: 'Salesforce',     type: 'Warning', message: 'API rate limit at 85%',             status: 'In Progress' },
    { id: 'ALT-003', timestamp: new Date('2026-04-13T09:48:00'), service: 'Oracle DB',      type: 'Error',   message: 'Query execution failed: ORA-01722', status: 'Open'        },
    { id: 'ALT-004', timestamp: new Date('2026-04-13T09:30:00'), service: 'SFTP Connector', type: 'Warning', message: 'Disk space below 20%',              status: 'Resolved'    },
    { id: 'ALT-005', timestamp: new Date('2026-04-13T09:15:00'), service: 'REST API',       type: 'Error',   message: 'HTTP 503 from upstream service',    status: 'Open'        },
    { id: 'ALT-006', timestamp: new Date('2026-04-13T09:00:00'), service: 'JMS Queue',      type: 'Info',    message: 'Queue depth reached 1000 messages', status: 'Resolved'    },
  ];

  filterStatus = 'All';
  filters = ['All', 'Open', 'In Progress', 'Resolved'];

  get filtered(): Alert[] {
    if (this.filterStatus === 'All') return this.alerts;
    return this.alerts.filter(a => a.status === this.filterStatus);
  }
}
