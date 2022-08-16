import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'src/app/services/admin/restaurantes/restaurantes.service';

@Component({
  selector: 'app-item-categories',
  templateUrl: './item-categories.component.html',
  styleUrls: ['./item-categories.component.css']
})
export class ItemCategoriesComponent implements OnInit {

  restaurantes: any;

  constructor(
    private restaurantesService: RestaurantesService
  ) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.restaurantesService.allRestaurants().subscribe(
      data => {
        this.restaurantes = data;
        console.log(this.restaurantes);
      }
    )
  }

}
