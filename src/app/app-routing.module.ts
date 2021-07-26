import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
