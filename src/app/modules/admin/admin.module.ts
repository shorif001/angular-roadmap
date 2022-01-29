import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    LifecycleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
