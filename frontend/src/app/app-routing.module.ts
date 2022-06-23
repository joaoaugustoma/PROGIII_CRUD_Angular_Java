import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteRoutes} from "./cliente/cliente.routing";

const routes: Routes = [
  ...ClienteRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
