import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicParentComponent } from './components/basic-parent/basic-parent.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    LifecycleComponent,
    HomeComponent,
    AboutComponent,
    BasicFormComponent,
    BasicParentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
