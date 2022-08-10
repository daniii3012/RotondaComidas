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

  errorMsg: string;
  showError: Boolean = false;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(userName: string, password: string){
    this.credentials = {
      "email" : userName,
      "password" : password
    }

    this.auth.login(this.credentials).subscribe(
      user => {
        this.auth.setAuthState(user)
        this.showError = false
        console.log(user)
      },
      error => {
        this.errorMsg = error
        this.showError = true
        this.password = ''
      }
    )
  }

  logout(){
    this.auth.logout();
  }

}
