import { Pipe, PipeTransform } from '@angular/core';
import { RestoCategorie } from '../interface';

@Pipe({
  name: 'filterByCategoryId',
  standalone: true
})
export class filterByCategoryIdPipe implements PipeTransform {

  transform(value: RestoCategorie[] | null, selectedCategoryId : string) : RestoCategorie[] {
    return value?.filter(item => item.uuid === selectedCategoryId) || []
  }

}
