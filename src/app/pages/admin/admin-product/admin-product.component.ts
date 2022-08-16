import { Component, OnInit } from '@angular/core';
import { IngredientesService } from 'src/app/services/admin/ingredientes/ingredientes.service';
import { ProductosService } from 'src/app/services/admin/productos/productos.service';
import { RestaurantesService } from 'src/app/services/admin/restaurantes/restaurantes.service';
import { TipoPlatoService } from 'src/app/services/admin/tipo-plato/tipo-plato.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  platos: any;
  ingredientesLista: any;
  tipos: any;
  restaurantes: any;

  idRestaurante: number;
  nombrePlato: string = "";
  foto: string = "";
  ingredientes: number[] = [];
  ingredientesFake: string[] = [];
  tipo: number;
  costo: number;

  datos: any;

  constructor(
    private productosService: ProductosService,
    private ingredientesService: IngredientesService,
    private tipoPlatoService: TipoPlatoService,
    private restaurantesService: RestaurantesService
  ) { }

  ngOnInit(): void {
    //this.getPlatos();
    this.getIngredientes();
    this.getTipos();
    this.getRestaurantes();
  }

  getPlatos() {
    this.productosService.allPlatos(this.idRestaurante).subscribe(
      data => {
        this.platos = data;
        console.log(this.platos);
      }
    )
  }

  addPlato() {
    this.datos = {
      "nombre": this.nombrePlato,
      "foto": this.foto,
      "ingredientes": [
        this.ingredientes
      ],
      "fkTipo": this.tipo,
      "costo": this.costo
    }
    this.productosService.addPLato(this.idRestaurante, this.datos).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    )
  }

  addIngredientes(idIngrediente: number, nombre: string) {
    this.ingredientes.push(idIngrediente);
    this.ingredientesFake.push(nombre);
    console.log(this.ingredientes);
  }

  getIngredientes() {
    this.ingredientesService.allIngredients().subscribe(
      data => {
        this.ingredientesLista = data;
        console.log(this.ingredientesLista);
      }
    )
  }

  getTipos() {
    this.tipoPlatoService.allTipos().subscribe(
      data => {
        this.tipos = data;
        console.log(this.tipos);
      }
    )
  }

  getRestaurantes() {
    this.restaurantesService.allRestaurants().subscribe(
      data => {
        this.restaurantes = data;
        console.log(this.restaurantes);
      }
    )
  }

  reset() {
    this.nombrePlato = "";
    this.foto = "";
    this.ingredientes = [];
    this.ingredientesFake = [];
    this.tipo = 0;
    this.costo = 0;
  }

}
