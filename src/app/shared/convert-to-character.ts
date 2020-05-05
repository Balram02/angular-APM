import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCharacter'
})
export class ConvertToCharacter implements PipeTransform {

  transform(value: string, char: string, char2: string) {
    return value.replace(char, char2);
  }

}
