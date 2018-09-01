import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private auth : AuthService, router : Router,private userservice : UserService){
  auth.user$.subscribe(user=>{
  if(user) {
    this.userservice.save(user);
    let returnUrl= localStorage.getItem('returnUrl')
    router.navigateByUrl(returnUrl);
  }
  })
 }
}
