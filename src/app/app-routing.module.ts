import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDialogComponent } from './core/components/update-dialog/updat-dialog/update-dialog.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';
import { ApproveComponent } from './pages/approve/approve/approve.component';
import { EventComponent } from './pages/events/events/event.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NgoComponent } from './pages/ngoList/ngo/ngo/ngo.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { RequestComponent } from './pages/request/request/request.component';
import { TechnicalsListComponent } from './pages/TechnicalsList/technicals-list/technicals-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path:'auth',
    loadChildren: ()=> import('./pages/auth/auth.module').then((m)=>m.AuthModule), //lazy loading
    canLoad: [NotAuthGuard]
  },
  {
    path:'update-profile',
    canLoad: [AuthGuard],
    component:UpdateDialogComponent
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
    canLoad: [AuthGuard]

  },
  {
    path:'events',
    loadChildren: ()=> import('./pages/events/events.module').then((m)=>m.EventsModule),
    canLoad: [AuthGuard],

  },

  {
    path:'technecals',
    component:TechnicalsListComponent,
    canLoad: [AuthGuard]
  },
  {
    path:'ngo',
    component:NgoComponent,
    canLoad: [AuthGuard]
  },
  {
    path:'approve',
    component:ApproveComponent,
    canLoad: [AuthGuard]
  },
  {
    path:'request',
    component:RequestComponent,
    canLoad: [AuthGuard]
  },
  {
    path: '**', //white card
    redirectTo: 'events',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
