import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicRowAddComponent } from './components/dynamic-row-add/dynamic-row-add.component';
import { DynamicScrollComponent } from './components/dynamic-scroll/dynamic-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicRowAddComponent,
    DynamicScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
