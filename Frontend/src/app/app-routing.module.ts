import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { EmployeeTableComponent } from './employeetable/employeetable.component';
import { LoginComponent } from './login/login.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home', icon: 'home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'employeetable', component: EmployeeTableComponent, data: { text: 'EmployeeTable', icon: 'table_view' } },
  { path: 'chart', component: ChartsComponent, data: { text: 'Analytics', icon: 'show_chart'}},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
   // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
