import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../product';
import { ItemBridgeService } from '../services/item-bridge.service';
import { TocartService } from '../services/tocart.service';

@Component({
  selector: 'app-pitem',
  templateUrl: './pitem.component.html',
  styleUrls: ['./pitem.component.css']
})
export class PitemComponent implements OnInit {

  @Output() dontCare = new EventEmitter;
  @Input() item: product = new product;
  constructor(private itembridge: ItemBridgeService, private cart: TocartService) { }

  ngOnInit(): void {
  }
  goextra(x: product): void {
    this.itembridge.item = x;
  }
  onclick(x: string): void {
    if (this.cart.additem(this.item, Number(x)))
      alert("Added " + x + " " + this.item.name + " to cart!");
    else
      alert("Already added (" + this.item.name + ") before");

  }
  dontCare_remove() {
    this.dontCare.emit(this.item);
  }

}
