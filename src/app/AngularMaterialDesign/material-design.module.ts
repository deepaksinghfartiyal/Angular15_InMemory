import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MaterialDesignComponent } from './material-design.component';
import { LoginComponent } from './MaterialComponent/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './MaterialComponent/dashboard/dashboard.component';


import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditComponent } from './MaterialComponent/edit/edit.component';
import { CreateComponent } from './MaterialComponent/create/create.component';
import { ConfirmComponent } from './MaterialComponent/confirm/confirm.component';
import { MessagesComponent } from './MaterialComponent/messages/messages.component';
import { MessagesService } from './Service/messages.service';
import { ConfirmService } from './Service/confirm.service';

@NgModule({
  declarations: [
    MaterialDesignComponent,
    LoginComponent,
    DashboardComponent,
    EditComponent,
    CreateComponent,
    ConfirmComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [MessagesService,ConfirmService,
    {provide: MatDialogRef, useValue: {}},
  ],
})
export class MaterialDesignModule { }
