import { Injectable } from '@angular/core';
import { product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class TocartService {
  amount: number[] = [];
  items: product[] = [];
  constructor() { }
  additem(x: product, amount: number): void {

    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if (element.id === x.id)
        return;
    }
    this.amount.push(amount);
    this.items.push(x);


  }
  get data(): [product[], number[]] {
    return [this.items, this.amount];
  }
}
