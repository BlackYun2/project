import { ItemBridgeService } from '../../services/item-bridge.service';
import { product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TocartService } from '../../services/tocart.service';

@Component({
  selector: 'app-pitemextra',
  templateUrl: './pitemextra.component.html',
  styleUrls: ['./pitemextra.component.css']
})
export class PitemextraComponent implements OnInit {

  arrowleft = faArrowLeft;
  item: product = new product;
  constructor(private itembridge: ItemBridgeService, private cart: TocartService) { }

  n: string = '';
  ngOnInit(): void {
    this.item = this.itembridge.item;
  }

  onclick(x: string): void {
    if (this.cart.additem(this.item, Number(x)))
      alert("Added " + x + " " + this.item.name + " to cart!");
    else
      alert("Already added ("+ this.item.name + ") before");

  }

}
