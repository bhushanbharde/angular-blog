import { Component, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-alert',
  imports: [FaIconComponent],
  // templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
  template: `
  <div
    [class]="'px-4 py-1.5 rounded my-6 flex items-center justify-between ' + variantClasses[type()]">
    <span>{{ message() }}</span>
    <button class="p-2 cursor-pointer" onclick="this.closest('div').remove()">
        <fa-icon [icon]="faXmark" class="text-md"></fa-icon>
    </button>
</div>`
})
export class AlertComponent {
  type = input<'success' | 'error' | 'info'>('info');
  message = input<string>('');
  faXmark = faXmark;

  variantClasses = {
    success: 'bg-green-950 border border-green-700 text-green-300',
    error: 'bg-red-950 border border-red-700 text-red-300',
    info: 'bg-blue-950 border border-blue-700 text-blue-300'
  };
}
