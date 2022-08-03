import { Component, OnInit } from '@angular/core';
import { IngredientesService } from 'src/app/services/admin/ingredientes/ingredientes.service';

@Component({
  selector: 'app-admin-ingredient',
  templateUrl: './admin-ingredient.component.html',
  styleUrls: ['./admin-ingredient.component.css']
})
export class AdminIngredientComponent implements OnInit {

  ingredientes: any;

  nombre: string = "";
  tipo: string = "";
  costoUnitario: number = 0;
  plato: string = "";

  constructor(
    private ingredientesService: IngredientesService
  ) { }

  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes() {
    this.ingredientesService.getIngredientes().subscribe(
      data => {
        this.ingredientes = data;
        console.log(this.ingredientes);
      }
    )
  }

  // Funcion temporal
  reset() {
    this.nombre = "";
    this.tipo = "";
    this.costoUnitario = 0;
    this.plato = "";
  }

}
