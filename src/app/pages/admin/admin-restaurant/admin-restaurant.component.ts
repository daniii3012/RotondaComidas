import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'src/app/services/admin/restaurantes/restaurantes.service';

@Component({
  selector: 'app-admin-restaurant',
  templateUrl: './admin-restaurant.component.html',
  styleUrls: ['./admin-restaurant.component.css']
})
export class AdminRestaurantComponent implements OnInit {

  restaurantes: any;

  nombre: string = "";
  nit: string = "";
  direccion: string = "";
  ciudad: string = "";

  constructor(
    private restaurantesService: RestaurantesService
  ) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.restaurantesService.getRestaurantes().subscribe(
      data => {
        this.restaurantes = data;
        console.log(this.restaurantes);
      }
    )
  }

  // Funcion temporal
  reset() {
    this.nombre = "";
    this.nit = "";
    this.direccion = "";
    this.ciudad = "";
  }

}
