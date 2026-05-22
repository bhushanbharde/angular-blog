import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `<div class="w-full">
      <input 
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value"
        (input)="onInputChange($event)"
        (blur)="onTouched()"
        class="w-full rounded-lg border border-gray-700 px-4 py-2 text-gray-100 focus:outline-none" />
    </div>`,
})
  
export class InputComponent {
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');

  value: string = '';
  onChange: any = () => { };
  onTouched: any = () => { };

  // Form Control Value Handling Logic
  writeValue(value: any): void { this.value = value || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  onInputChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.value = element.value;
    this.onChange(this.value);
  }
}
