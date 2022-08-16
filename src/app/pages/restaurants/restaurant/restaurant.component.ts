import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/admin/productos/productos.service';
import { RestaurantesService } from 'src/app/services/admin/restaurantes/restaurantes.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  nit: any;

  restaurante: any;

  platos: any;
  idRestaurante: number;

  constructor(
    private router: Router,
    private restaurantesService: RestaurantesService,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.nit = this.router.url.split('/').pop()
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantesService.restaurantByNit(this.nit).subscribe(
      data => {
        this.restaurante = data;
        this.getPlatos();
        console.log(this.restaurante);
      },
      error => {
        console.log(error)
      }
    )
  }

  getPlatos() {
    this.idRestaurante = this.restaurante.id;
    this.productosService.allPlatos(this.idRestaurante).subscribe(
      data => {
        this.platos = data;
        console.log(this.platos);
      },
      error => {
        console.log(error)
      }
    )
  }

}
