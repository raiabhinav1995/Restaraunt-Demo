import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenulistComponent } from './components/menulist/menulist.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';

@NgModule({
  declarations: [
    AppComponent,
    MenulistComponent,
    OrdersummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
