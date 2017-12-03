import { UsersComponent } from './../admin/users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../_rotas/app.routing.module';
import { PainelModule } from '../admin/painel/painel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PainelModule
  ],
  declarations: [
    HomeComponent,
    UsersComponent,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
