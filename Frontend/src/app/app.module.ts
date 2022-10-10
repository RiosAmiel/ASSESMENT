import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeTableComponent } from './employeetable/employeetable.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCommonModule} from '@angular/material/core';
import {MatCard, MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChartsComponent } from './charts/charts.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule, LineSeriesService, CategoryService, LegendService,
        DataLabelService, TooltipService, AccumulationChartModule, PieSeriesService,
        AccumulationDataLabelService, AccumulationLegendService,
        AccumulationTooltipService} from '@syncfusion/ej2-angular-charts';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeTableComponent,
    LoginComponent,
    ChartsComponent
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
    IgxDatePickerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCommonModule,
    MatCardModule,
    MatSnackBarModule,
    GridModule,
    AccumulationChartModule,
    ChartModule,
    ReactiveFormsModule,
    OverlayModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [LineSeriesService, CategoryService,
     LegendService, DataLabelService, TooltipService, PieSeriesService,
     AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
