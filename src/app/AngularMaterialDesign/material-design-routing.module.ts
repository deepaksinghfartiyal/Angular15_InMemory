import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignComponent } from './material-design.component';
import { LoginComponent } from './MaterialComponent/login/login.component';
import { DashboardComponent } from './MaterialComponent/dashboard/dashboard.component';
import { EditComponent } from './MaterialComponent/edit/edit.component';
import { CreateComponent } from './MaterialComponent/create/create.component';

const routes: Routes = [{
   path: '', component: MaterialDesignComponent },
   {path:'Login',component:LoginComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'Edit/:id',component:EditComponent},
   {path:'Add',component:CreateComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDesignRoutingModule { }
