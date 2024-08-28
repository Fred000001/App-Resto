import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIService } from './service';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { RestoCategorie, restoRecepies } from './interface';
import { NgFor, SlicePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderPageComponent, NgFor, SlicePipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  title = 'appResto';
  // categories!: RestoCategorie[];

  // async ngOnInit(): Promise<void> {
  //   const value = await inject(APIService).getRecipes();
  //   console.log(value);
  //   this.categories = value;
  // }

}
