import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getClient().subscribe(
      data => {
        this.user = data;
        console.log(this.user)
      },
      error => {
        console.log(error);
      }
    )
  }

}
