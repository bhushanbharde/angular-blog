import { Component, input, inject, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="w-full">
      <textarea
        [placeholder]="placeholder()"
        [rows]="rows()"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
        (blur)="onTouched()"
        class="w-full rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:outline-none resize-none"
        [ngClass]="{
          'border-gray-700 bg-gray-900/50 text-gray-100 focus:border-blue-500': !isInvalid(),
          'border-red-400 bg-red-500/10 text-red-200 focus:border-red-400': isInvalid(),
          'opacity-50 cursor-not-allowed bg-gray-800': disabled
        }">
      </textarea>
    </div>
  `
})
export class TextareaComponent implements ControlValueAccessor, OnInit {
  placeholder = input<string>('');
  rows = input<number>(4);

  value: string = '';
  disabled: boolean = false;

  private injector = inject(Injector);
  private ngControl?: NgControl;

  ngOnInit(): void {
    this.ngControl =
      this.injector.get(NgControl, null, {
        self: true,
        optional: true
      }) || undefined;

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  isInvalid(): boolean {
    return !!(
      this.ngControl &&
      this.ngControl.invalid &&
      (this.ngControl.touched || this.ngControl.dirty)
    );
  }

  // ControlValueAccessor
  writeValue(value: any): void {
    this.value = value || '';
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const element = event.target as HTMLTextAreaElement;
    this.value = element.value;
    this.onChange(this.value);
  }
}