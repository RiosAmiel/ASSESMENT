import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EmployeeTableComponent } from './employeetable/employeetable.component';
import { LoginComponent } from './login/login.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home', icon: 'home' } },
  { path: 'employeetable', component: EmployeeTableComponent, data: { text: 'EmployeeTable', icon: 'table_view' } },
  { path: 'chart', component: ChartsComponent, data: { text: 'Analytics', icon: 'show_chart'}},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login'}
   // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule, ]
})
export class AppRoutingModule {
}
