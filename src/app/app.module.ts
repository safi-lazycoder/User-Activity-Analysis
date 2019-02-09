import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { GraphComponent } from './components/graph/graph.component';
import { SectorComponent } from './components/sector/sector.component';
import { HeaderComponent } from './components/layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    GraphComponent,
    SectorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
