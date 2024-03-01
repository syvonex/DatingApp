import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  model: any = {};
  // loggedIn = false;
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService) { }

  ngOnInit(): void{
    // this.currentUser$ = this.accountService.currentUser$;
  }

  // Pass input to login service
  login(){
    this.accountService.login(this.model).subscribe({
      next: Response => {
        console.log(Response);
      },
      error: error => console.log(error)
    });
  }

  logout(){
    this.accountService.logout();
  }
}
