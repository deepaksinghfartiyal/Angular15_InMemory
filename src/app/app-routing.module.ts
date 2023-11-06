import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'signup/v2/createaccount',component:LoginComponent},
  { path: '', redirectTo: '/signup/v2/createaccount', pathMatch: 'full'},
  { path: 'lazyOnDemandLoad', loadChildren: () => import('./FeatureModule/on-demand-loading-lazy-loading/on-demand-loading-lazy-loading.module').then(m => m.OnDemandLoadingLazyLoadingModule) },
  { path: 'materialDesign', loadChildren: () => import('./AngularMaterialDesign/material-design.module').then(m => m.MaterialDesignModule) },
  //wildcard route is placed at the end of the routes
  { path: '**', component: PageNotFoundComponent}
];

// Iterate through the routes array and access the path values
routes.forEach(route => {
  console.log('Path:--', route.path);
});


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
constructor(private router: Router)
{
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const url = event.url;
      console.log('Captured URL:', url);
      //alert(url);
    }
  });
}
}
