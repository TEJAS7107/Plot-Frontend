import { Component } from '@angular/core';
import { AuthenticationsService } from '../Authentication/authentications.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
constructor(private auth:AuthenticationsService,private router:Router){}
logout(){
  //this.auth.logout();
  this.auth.logout().subscribe(() => {
    this.router.navigateByUrl("loginn").then(()=>
    window.location.reload
    )
  });
}
}
