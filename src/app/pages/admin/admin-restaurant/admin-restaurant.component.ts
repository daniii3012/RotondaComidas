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
  foto: string = "";
  nit: string = "";
  direccion: string = "";
  ciudad: string = "";

  datos: any;

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

  addRestaurant() {
    this.datos = {
      "nombre": this.nombre,
      "nit": this.nit,
      "direccion": this.direccion,
      "ciudad": this.ciudad,
      "foto": this.foto
    }
    this.restaurantesService.addRestaurant(this.datos).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    )
  }

  reset() {
    this.nombre = "";
    this.foto = "";
    this.nit = "";
    this.direccion = "";
    this.ciudad = "";
  }

}
