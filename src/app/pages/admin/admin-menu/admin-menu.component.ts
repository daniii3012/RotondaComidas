import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/admin/menus/menus.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  menus: any;

  nombrePlato: string = "";
  restaurante: string = "";
  tipo: string = "";

  constructor(
    private menusService: MenusService
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menusService.getMenus().subscribe(
      data => {
        this.menus = data;
        console.log(this.menus);
      }
    )
  }

  // Funcion temporal
  reset() {
    this.nombrePlato = "";
    this.restaurante = "";
    this.tipo = "";
  }

}
