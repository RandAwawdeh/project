import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'auth',
    loadChildren: ()=> import('./pages/auth/auth.module').then((m)=>m.AuthModule), //lazy loading
    canLoad: [NotAuthGuard]
  },
  {
    path:'home',
    loadChildren: ()=> import('./pages/home/home.module').then((m)=>m.HomeModule), //lazy loading
    canLoad: [NotAuthGuard],
    component: HomeComponent

  },
  {
    path:'profile',
    loadChildren: ()=> import('./pages/profile/profile.module').then((m)=>m.ProfileModule),
    component: ProfileComponent,
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./pages/dashboard/dashboard.module').then((m)=>m.DashboardModule), //lazy loading

    canLoad: [AuthGuard]
  },
  {
    path: '**', //white card
    redirectTo: 'auth',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
