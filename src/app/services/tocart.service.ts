import { Injectable } from '@angular/core';
import { product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class TocartService {
  amount: number[] = [];
  items: product[] = [];
  constructor() { }
  additem(x: product, amount: number): boolean {

    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if (element.id === x.id)
        return false;
    }
    this.amount.push(amount);
    this.items.push(x);
    return true;


  }
  get data(): [product[], number[]] {
    return [this.items, this.amount];
  }
}
