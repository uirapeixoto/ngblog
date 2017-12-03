import { UsersComponent } from './../admin/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PainelComponent } from './../admin/painel/painel.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: PainelComponent },
  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
