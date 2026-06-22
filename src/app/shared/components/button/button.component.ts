import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button 
      [type]="type()"
      [disabled]="disabled()"
      [class]="'w-full cursor-pointer rounded-lg px-5 py-2 text-sm transition duration-300 disabled:cursor-not-allowed hover:text-white ' + variantClasses[variant()]">
      <!-- ng-content projects the text passed inside the tags -->
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  // Modern Signal Inputs (Angular v17+)
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  variant = input < 'primary' | 'secondary' | 'success' | 'danger'| 'outline' | 'info'>('primary');

  // Map variant tokens directly to Tailwind v4 utility styles
  variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600',
    secondary: 'text-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white',
    outline: 'border border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white disabled:bg-gray-500',
    success: 'bg-green-700 hover:bg-green-600 disabled:bg-gray-600',
    danger: 'bg-red-700 hover:bg-red-600 disabled:bg-gray-600',
    info: 'bg-purple-600 hover:bg-purple-600 disabled:bg-gray-600'
  };
}
