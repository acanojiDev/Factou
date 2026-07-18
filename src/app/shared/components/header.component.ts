import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container">
        <h1>{{ title }}</h1>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #f5f5f5;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  `],
})
export class HeaderComponent {
  title = 'Factou';
}
