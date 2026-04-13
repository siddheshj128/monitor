import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-card-shell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-shell" [class.flush]="flush">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card-shell {
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }
    .card-shell.flush {
      padding: 0;
    }
  `]
})
export class MonitorCardShellComponent {
  @Input() flush = false;
}
