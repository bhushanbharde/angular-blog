import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripTags'
})
export class StripTagsPipe implements PipeTransform {

  transform(value: string | undefined | null): string {
    if (!value) return '';

    // Regular expression that removes all structural HTML tag characters
    return value.replace(/<[^>]*>/g, '');
  }

}
