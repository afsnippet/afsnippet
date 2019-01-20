import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService, User } from '../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  user: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.user = this.auth.user;
  }

  signOut() {
    this.auth.signOut();
  }
}
