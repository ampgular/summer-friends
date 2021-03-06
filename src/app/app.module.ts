import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
   declarations: [
      AppComponent,
      DetailComponent,
      DashboardComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
