import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../services/dashboard.service';
import { DashboardStats, DashboardWidget } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h2>Dashboard</h2>
      
      <div class="stats-container" *ngIf="stats">
        <div class="stat-card">
          <h3>Facturas Totales</h3>
          <p class="stat-value">{{ stats.totalInvoices }}</p>
        </div>
        <div class="stat-card">
          <h3>Facturas Pendientes</h3>
          <p class="stat-value">{{ stats.pendingInvoices }}</p>
        </div>
        <div class="stat-card">
          <h3>Ingresos Totales</h3>
          <p class="stat-value">{{ stats.totalRevenue | currency }}</p>
        </div>
      </div>

      <div class="widgets-container" *ngIf="widgets">
        <div class="widget" *ngFor="let widget of widgets">
          <h4>{{ widget.title }}</h4>
          <p>{{ widget.value }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 1rem;
    }

    h2 {
      margin-bottom: 2rem;
      color: #333;
    }

    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .stat-card h3 {
      margin: 0 0 1rem 0;
      color: #666;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .stat-value {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #333;
    }

    .widgets-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .widget {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .widget h4 {
      margin: 0 0 0.5rem 0;
      color: #666;
    }

    .widget p {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
  `],
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  widgets: DashboardWidget[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadWidgets();
  }

  private loadStats(): void {
    this.dashboardService.getStats().subscribe((stats) => {
      this.stats = stats;
    });
  }

  private loadWidgets(): void {
    this.dashboardService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
    });
  }
}
