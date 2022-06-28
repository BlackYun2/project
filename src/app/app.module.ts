import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitemComponent } from './components/pitem/pitem.component';
import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HeaderComponent } from './components/header/header.component';
import { PitemextraComponent } from './components/pitemextra/pitemextra.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { NoscrollDirective } from './directives/noscroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    PitemComponent,
    PlistComponent,
    CartComponent,
    ConfirmComponent,
    HeaderComponent,
    PitemextraComponent,
    NoscrollDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
