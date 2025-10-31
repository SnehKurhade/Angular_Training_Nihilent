import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {
     if(user === "ranchowangdu1633@gmail.com" && password === "Jabba"){
        this.status=true;
        console.log("Valid User");
        localStorage.setItem("username",user);
     }
     else{
        this.status=false;
        console.log("Invalid User");
     }
      return this.status;
     
 }

 logout(): any {  localStorage.removeItem("username");  }
 getUser(): any {   return localStorage.getItem("username");  }
 isLoggedIn(): boolean {   return this.getUser() != null;  }
}