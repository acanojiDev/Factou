export interface DashboardStats {
  totalInvoices: number;
  pendingInvoices: number;
  totalRevenue: number;
  lastUpdated: Date;
}

export interface DashboardWidget {
  id: string;
  title: string;
  value: string | number;
  icon?: string;
}
