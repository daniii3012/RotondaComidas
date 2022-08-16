import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registro1: boolean = false;
  registro2: boolean = false;

  register: any;
  clientData: any;

  name: string;
  document: string;
  address: string;
  city: string;

  email: string;
  password: string;

  loading: boolean = false;
  errorMsg: string = "Ha ocurrido un error. Intentalo de nuevo.";
  showError: Boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.registro1 = true;
  }

  registerUser(email: string, password: string) {
    this.loading = true;
    this.register = {
      "email": email,
      "password": password
    }
    
    this.auth.register(this.register).subscribe(
      data => {
        this.registro1 = false;
        this.registro2 = true;
        this.loading = false;
        this.showError = false;
        this.auth.setAuthState(data);
      },
      error => {
        this.registro1 = true;
        this.registro2 = false;
        this.loading = false;
        this.showError = true;
        this.email = '';
        this.password = '';
      }
    );
  }

  clientDataRegister(name: string, document: string, address: string, city: string, email: string) {
    this.loading = true;
    this.clientData = {
      "cedula": document,
      "nombre": name,
      "direccion": address,
      "ciudad": city,
      "correo": email
    }

    this.auth.clientData(this.clientData).subscribe(
      data => {
        this.loading = false;
        this.showError = false;
        this.router.navigate(['/home']);
      },
      error => {
        this.loading = false;
        this.showError = true;
        console.log(error);
        if(error.status == undefined) {
          this.loading = false;
          this.showError = false;
          this.router.navigate(['/home']);
        } else {
          this.loading = false;
          this.showError = true;
          console.log(error);
        }
      }
    );
  }

}
