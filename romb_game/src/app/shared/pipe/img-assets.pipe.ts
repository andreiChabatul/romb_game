import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgAssets'
})
export class ImgAssetsPipe implements PipeTransform {

  transform(value: string | undefined): string {
    return (value)
      ? `assets/${value}.png`
      : `assets/default.png`
  }
}
