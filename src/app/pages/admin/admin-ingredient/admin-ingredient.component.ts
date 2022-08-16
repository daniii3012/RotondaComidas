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
  costoUnitario: number = 0;

  datos: any;

  constructor(
    private ingredientesService: IngredientesService
  ) { }

  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes() {
    this.ingredientesService.allIngredients().subscribe(
      data => {
        this.ingredientes = data;
        console.log(this.ingredientes);
      }
    )
  }

  addIngredient() {
    this.datos = {
      "nombre": this.nombre,
      "costoUnitario": this.costoUnitario
    }
    this.ingredientesService.addIngredient(this.datos).subscribe(
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
    this.costoUnitario = 0;
  }

}
