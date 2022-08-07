import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeTableComponent } from './employeetable/employeetable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    IgxLayoutModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
