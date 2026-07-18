import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [ButtonDirective],
  template: `
    <button pButton severity="primary" rounded>Check</button>
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
export class MainLayoutComponent { }
