import { MonitorDashboardData } from '../models/monitor.models';

export const MONITOR_MOCK_DATA: MonitorDashboardData = {
  treemapItems: [
    { x: 'ProjectSales', y: 8000000 },
    { x: 'NarCo',        y: 2000000 },
    { x: 'PlasmaGlow',   y: 2000000 },
    { x: 'DataFill',     y: 1000000 },
    { x: 'BulkMail',     y: 1000000 },
  ],

  alerts: [
    { id: 'ALT-001', timestamp: new Date('2026-04-13T10:15:00'), service: 'ProjectSales', severity: 'Critical', message: 'Connection timeout after 30s',         status: 'Open'        },
    { id: 'ALT-002', timestamp: new Date('2026-04-13T10:02:00'), service: 'NarCo',        severity: 'High',     message: 'API rate limit at 85%',                status: 'In Progress' },
    { id: 'ALT-003', timestamp: new Date('2026-04-13T09:48:00'), service: 'PlasmaGlow',   severity: 'Critical', message: 'Query execution failed: timeout',      status: 'Open'        },
    { id: 'ALT-004', timestamp: new Date('2026-04-13T09:30:00'), service: 'DataFill',     severity: 'Medium',   message: 'Disk space below 20%',                 status: 'Resolved'    },
    { id: 'ALT-005', timestamp: new Date('2026-04-13T09:15:00'), service: 'BulkMail',     severity: 'High',     message: 'HTTP 503 from upstream service',       status: 'Open'        },
    { id: 'ALT-006', timestamp: new Date('2026-04-13T09:00:00'), service: 'ProjectSales', severity: 'Low',      message: 'Queue depth reached 1000 messages',    status: 'Resolved'    },
  ],

  stats: [
    { label: 'Total Transactions',  value: '48,291', sub: 'Today',       trend: 'up',      trendValue: '+12%',  color: '#1565C0', spark: [30,45,40,55,60,52,70,80,75,90] },
    { label: 'Success Rate',        value: '98.4%',  sub: 'Last 24h',    trend: 'up',      trendValue: '+0.3%', color: '#2e7d32', spark: [90,92,91,95,96,94,97,98,98,99] },
    { label: 'Active Flows',        value: 247,      sub: 'Running',     trend: 'neutral', trendValue: '0%',    color: '#6a1b9a', spark: [240,243,245,241,248,246,247,250,247,247] },
    { label: 'Errors (24h)',        value: 38,       sub: 'Vs 52 prev',  trend: 'down',    trendValue: '-27%',  color: '#E64A19', spark: [50,48,55,52,47,45,40,42,38,38] },
    { label: 'Avg Response',        value: '142ms',  sub: 'P95: 380ms',  trend: 'down',    trendValue: '-8ms',  color: '#e65100', spark: [160,155,162,150,148,145,143,142,141,142] },
    { label: 'License Utilization', value: '84%',    sub: '1010 / 1200', trend: 'up',      trendValue: '+2%',   color: '#00695c', spark: [78,79,80,81,82,82,83,84,84,84] },
  ],

  licenseCategories: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22'],

  licenseSeries: [
    { name: 'Pending',  data: [20, 30, 25, 45, 35, 50] },
    { name: 'Consumed', data: [40, 38, 55, 60, 65, 70] },
  ],
};
