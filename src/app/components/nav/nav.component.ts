import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isAdmin! : boolean
  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.auth.adminSub.subscribe({
      next : (data : boolean) => {this.isAdmin = data}
    })
  }

}
