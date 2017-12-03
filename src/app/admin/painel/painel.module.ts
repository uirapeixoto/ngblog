import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SidebarModule } from '../sidebar/sidebar.module';
import { DashboardModule } from '../dashboard/dashboard.module';

import { PainelComponent } from './painel.component';
import { PainelRoutingModule } from './painel.routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DashboardModule
  ],
  declarations: [
    PainelComponent
  ],
  exports: [PainelComponent]
})
export class PainelModule { }
