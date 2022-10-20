import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isAdmin() : boolean {
    return localStorage.getItem("role") == "Admin"
  }

  adminSub : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAdmin)

  private url : string = "http://localhost:5128/api/"
  constructor(
    private client : HttpClient
  ) { }

  login() {
    this.client.post<any>(this.url+"user/login", {email : "admin@test.com", password : "test1234"})
    .subscribe({
      next : (data : any) => {
        localStorage.setItem("token", data.token)

        let decoded : any = jwtDecode(data.token)
        console.log(decoded)
        let role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        console.log(role)
        localStorage.setItem("role", role)
        this.adminSub.next(this.isAdmin)
      }
    })
  }

  logout() {
    localStorage.clear()
    this.adminSub.next(this.isAdmin)

  }
}
