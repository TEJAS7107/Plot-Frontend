import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardGuard } from './Authentication/auth-guard.guard';

const routes: Routes = [

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: 'login', component: LoginPageComponent
  },
  {
    path:'loginn', redirectTo:'login', pathMatch:'full'
  },
  {
    path: " ", redirectTo: 'landingPage', pathMatch: 'full'
  },
  {
    path: 'landingPage', component: LandingPageComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: '**', redirectTo: 'landingPage'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
