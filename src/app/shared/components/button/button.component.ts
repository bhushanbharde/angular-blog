import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button 
      [type]="type()"
      [disabled]="disabled()"
      [class]="'w-full cursor-pointer rounded-lg py-2.5 font-semibold text-white transition disabled:cursor-not-allowed ' + variantClasses[variant()]">
      <!-- ng-content projects the text passed inside the tags -->
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  // Modern Signal Inputs (Angular v17+)
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  variant = input<'primary' | 'secondary' | 'danger'>('primary');

  // Map variant tokens directly to Tailwind v4 utility styles
  variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 disabled:bg-gray-400'
  };
}
