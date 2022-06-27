import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { PlistComponent } from './components/plist/plist.component';
import { PitemextraComponent } from './components/pitemextra/pitemextra.component';
import { ConfirmComponent } from './components/confirm/confirm.component';


const routes: Routes = [
  { path: '', component: PlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'item/:id', component: PitemextraComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
