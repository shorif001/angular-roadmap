import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicParentComponent } from './components/basic-parent/basic-parent.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent, children:[
    {path:'lifecycle', component:LifecycleComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'basicparent', component:BasicParentComponent},
    {path:'basic', component:BasicFormComponent},
    {path: '', redirectTo: '/admin/home', pathMatch:'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
