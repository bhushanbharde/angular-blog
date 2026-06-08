import { Component, input, inject, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="w-full">
      <input 
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
        (blur)="onTouched()"
        class="w-full rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:outline-none"
        [ngClass]="{
          'border-gray-700 bg-gray-900/50 text-gray-100 focus:border-blue-500': !isInvalid(),
          'border-red-400 bg-red-500/10 text-red-200 focus:border-red-400': isInvalid(),
          'opacity-50 cursor-not-allowed bg-gray-800': disabled
        }" />
    </div>`
})
export class InputComponent implements ControlValueAccessor, OnInit {
  type = input<string>('text');
  placeholder = input<string>('');

  value: string = '';
  disabled: boolean = false;

  // 1. Inject the dependencies safely inside the valid initialization context
  private injector = inject(Injector);
  private ngControl?: NgControl;

  ngOnInit(): void {
    // 2. Safely extract NgControl inside ngOnInit using the Injector reference
    this.ngControl = this.injector.get(NgControl, null, { self: true, optional: true }) || undefined;

    // 3. Register this component as the form engine's value accessor
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // 4. Clean validation check method referencing the local class variable
  isInvalid(): boolean {
    return !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || this.ngControl.dirty));
  }

  // --- ControlValueAccessor Methods ---
  writeValue(value: any): void {
    this.value = value || '';
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.value = element.value;
    this.onChange(this.value);
  }
}