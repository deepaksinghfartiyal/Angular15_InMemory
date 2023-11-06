import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnDemandLoadingLazyLoadingRoutingModule } from './on-demand-loading-lazy-loading-routing.module';
import { OnDemandLoadingLazyLoadingComponent } from './on-demand-loading-lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CreateComponent } from 'src/app/create/create.component';
import { EditComponent } from 'src/app/edit/edit.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { SideNavigationComponent } from 'src/app/side-navigation/side-navigation.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnDemandLoadingLazyLoadingComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavigationComponent,
    FooterComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    OnDemandLoadingLazyLoadingRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class OnDemandLoadingLazyLoadingModule { }
