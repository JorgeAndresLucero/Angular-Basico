import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './contador/contador/contador.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
     //Aca se llama el modulo de Heroes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }