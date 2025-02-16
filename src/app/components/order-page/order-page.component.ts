import { Component, inject, OnInit } from '@angular/core';
import { RestoCategorie, restoRecepies } from '../../interface';
import { APIService } from '../../service';
import { AsyncPipe, JsonPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { filterByCategoryIdPipe } from '../../pipes/pipes-perso.pipe';
import { MenuCategoriesComponent } from "../menu-categories/menu-categories.component";
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [NgFor, UpperCasePipe, filterByCategoryIdPipe, AsyncPipe, NgIf, MenuCategoriesComponent,FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})


export class OrderPageComponent {
  title = 'Pizza';
  email:string = ""
  
  categories$: Promise<RestoCategorie[]> = inject(APIService).getRecipes()
  selectedCategoryId: string = "01489fc9-0be3-424e-a276-33e393062072"
  hello =  console.log(this.categories$);
  


  orderForm =new FormArray([] as any, Validators.compose([
    Validators.minLength(1)
  ]))

  constructor (
    private readonly _service: APIService
  ) {
    // this._service.getRecipes()
    this.categories$ = this._service.getRecipes()
  }

  addToForm(id: string, price:number) {
    const itemExist = this.orderForm.value.findIndex((element: {id: string}) => element.id === id)

    if(itemExist >= 0){
      let quantity: number = this.orderForm.at(itemExist).get('quantity')?.value || 1
      this.orderForm.at(itemExist).get('quantity')?.patchValue(++quantity)
    } else {
      const itemCtrl = new FormGroup({
        quantity: new FormControl(1),
        id: new FormControl(id),
        price: new FormControl(price)
      })
      this.orderForm.push(itemCtrl)
    }
    console.log(this.orderForm.value, this.orderForm.valid);
  }

  deleteToForm(id: string, price: number) {
    const itemExist = this.orderForm.value.findIndex((element: {id: string}) => element.id === id);
    
    if (itemExist >= 0) {
      let quantity: number = this.orderForm.at(itemExist).get('quantity')?.value || 1;
      quantity--;
      if (quantity <= 0) {
        this.orderForm.removeAt(itemExist);
      } else {
        this.orderForm.at(itemExist).get('quantity')?.patchValue(quantity);
      }
    }
  
    console.log(this.orderForm.value, this.orderForm.valid);
  }
  


}
  


