import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button 
      [type]="type()"
      [disabled]="disabled()"
      [class]="'w-full cursor-pointer rounded-lg px-5 py-2 text-sm transition duration-300 disabled:cursor-not-allowed ' + variantClasses[variant()]">
      <!-- ng-content projects the text passed inside the tags -->
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  // Modern Signal Inputs (Angular v17+)
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  variant = input < 'primary' | 'secondary' | 'danger'| 'outline' | 'info'>('primary');

  // Map variant tokens directly to Tailwind v4 utility styles
  variantClasses = {
    primary: 'bg-blue-700 hover:bg-blue-600 disabled:bg-gray-600',
    secondary: 'bg-gray-700 hover:bg-gray-600 disabled:bg-gray-600',
    danger: 'bg-red-700 hover:bg-red-600 disabled:bg-gray-600',
    outline: 'border border-gray-700 hover:bg-gray-700',
    info: 'bg-purple-700 hover:bg-purple-600 disabled:bg-gray-600'
  };
}
