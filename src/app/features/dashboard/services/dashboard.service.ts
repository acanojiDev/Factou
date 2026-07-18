import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardStats, DashboardWidget } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getStats(): Observable<DashboardStats> {
    const mockStats: DashboardStats = {
      totalInvoices: 150,
      pendingInvoices: 25,
      totalRevenue: 45000,
      lastUpdated: new Date(),
    };
    return of(mockStats).pipe(delay(500));
  }

  getWidgets(): Observable<DashboardWidget[]> {
    const mockWidgets: DashboardWidget[] = [
      { id: '1', title: 'Facturas Totales', value: 150, icon: 'file-invoice' },
      { id: '2', title: 'Facturas Pendientes', value: 25, icon: 'clock' },
      { id: '3', title: 'Ingresos', value: '$45,000', icon: 'trending-up' },
      { id: '4', title: 'Clientes', value: 48, icon: 'users' },
    ];
    return of(mockWidgets).pipe(delay(500));
  }
}
