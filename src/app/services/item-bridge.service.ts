import { product } from './../product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemBridgeService {

  _item: product = new product;
  constructor() { }
  get item(): product {
    return this._item;
  }
  set item(i: product) {
    this._item = i;
  }
}
