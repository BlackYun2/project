import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { PlistComponent } from './plist/plist.component';
import { PitemextraComponent } from './pitemextra/pitemextra.component';

const routes: Routes = [
  {path: '', component: PlistComponent},
  {path: 'cart', component: CartComponent},
  {path: ':id', component: PitemextraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
