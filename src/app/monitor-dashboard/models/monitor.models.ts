export interface TreemapItem {
  x: string;
  y: number;
}

export interface AlertItem {
  id: string;
  timestamp: Date;
  service: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  message: string;
  status: 'Open' | 'Resolved' | 'In Progress';
}

export interface StatWidget {
  label: string;
  value: string | number;
  sub?: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  color: string;
  spark: number[];
}

export interface LicenseSeries {
  name: string;
  data: number[];
}

export interface MonitorDashboardData {
  treemapItems: TreemapItem[];
  alerts: AlertItem[];
  stats: StatWidget[];
  licenseCategories: string[];
  licenseSeries: LicenseSeries[];
}
