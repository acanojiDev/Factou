import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      min-height: calc(100vh - 70px);
    }
  `],
})
export class MainLayoutComponent {}
