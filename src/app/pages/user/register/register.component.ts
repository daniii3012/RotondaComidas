import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  }

  registerUser(email: string, password: string) {
    this.loading = true;
    this.register = {
      "email": email,
      "password": password
    }
    
    this.auth.register(this.register).subscribe(
      data => {
        this.showError = false;
        this.clientDataRegister(this.name, this.document, this.address, this.city, email);
        this.auth.setAuthState(data);
      },
      error => {
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
