import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public auth: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
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

  continuar() {
    this.route.navigate(['/home']);
    window.location.reload();
  }

}
