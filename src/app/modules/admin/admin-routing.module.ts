import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent, children:[
    {path:'lifecycle', component:LifecycleComponent},
    {path:'home', component:HomeComponent},
    {path: '', redirectTo: '/admin/home', pathMatch:'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
