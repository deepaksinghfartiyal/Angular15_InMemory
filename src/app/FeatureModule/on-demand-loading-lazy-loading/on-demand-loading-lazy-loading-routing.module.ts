import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnDemandLoadingLazyLoadingComponent } from './on-demand-loading-lazy-loading.component';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CreateComponent } from 'src/app/create/create.component';
import { EditComponent } from 'src/app/edit/edit.component';

// Import other components here
const routes: Routes = [
  //{ path: '', component: OnDemandLoadingLazyLoadingComponent },
 // { path: 'home', component: HomeComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'Add',component:CreateComponent},
  {path:'Edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnDemandLoadingLazyLoadingRoutingModule { }
