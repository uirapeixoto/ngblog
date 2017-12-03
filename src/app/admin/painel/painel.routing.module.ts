import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PostsComponent } from '../posts/posts.component';
import { RolesComponent } from '../roles/roles.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './../users/users.component';

const paneldRoutes: Routes = [
  { path: 'panel', component: DashboardComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(paneldRoutes)],
  exports: [RouterModule]
})
export class PainelRoutingModule {}
