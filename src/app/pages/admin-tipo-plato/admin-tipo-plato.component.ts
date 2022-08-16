import { Component, OnInit } from '@angular/core';
import { TipoPlatoService } from 'src/app/services/admin/tipo-plato/tipo-plato.service';

@Component({
  selector: 'app-admin-tipo-plato',
  templateUrl: './admin-tipo-plato.component.html',
  styleUrls: ['./admin-tipo-plato.component.css']
})
export class AdminTipoPlatoComponent implements OnInit {

  tipos: any;

  tipo: string = "";

  datos: any;

  constructor(
    private tipoPlatoService: TipoPlatoService
  ) { }

  ngOnInit(): void {
    this.getTipos();
  }

  getTipos() {
    this.tipoPlatoService.allTipos().subscribe(
      data => {
        this.tipos = data;
        console.log(this.tipos);
      }
    )
  }

  addTipo() {
    this.datos = {
      "tipo": this.tipo
    }
    this.tipoPlatoService.addTipo(this.datos).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    )
  }

  reset() {
    this.tipo = "";
  }

}
