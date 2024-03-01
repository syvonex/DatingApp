import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Is completed'),
    });
  }

  cancelRegisterMode(event : boolean){
    this.registerMode = event;
  }

}
