import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClienteRoutes} from "./cliente.routing";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(ClienteRoutes),
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    MatInputModule
  ]
})
export class ClienteModule { }
