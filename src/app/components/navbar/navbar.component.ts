import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  credentials: any;

  userName: string;
  password: string;

  errorMsg: string = "Correo o contraseña incorrectas";
  showError: Boolean = false;

  loading: boolean = false;

  tokenExpiration: any;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('userToken'))
  }

  login(userName: string, password: string){
    this.loading = true;
    this.credentials = {
      "email" : userName,
      "password" : password
    }

    this.auth.login(this.credentials).subscribe(
      user => {
        this.loading = false;
        this.auth.setAuthState(user);
        this.showError = false;
        console.log(user);
      },
      error => {
        this.loading = false;
        this.showError = true;
        this.password = '';
      }
    )
  }

  logout(){
    this.auth.logout();
  }

}
