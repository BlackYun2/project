import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { TocartService } from '../services/tocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdata: [product[], number[]] = [[], []];
  total: number = 0;
  name: string = '';
  address: string = '';
  card: number | undefined;
  notempty = false;
  constructor(private itemdata: TocartService) { }

  ngOnInit(): void {
    this.cartdata = this.itemdata.data;
    for (let i = 0; i < this.cartdata[0].length; i++) {
      const element = this.cartdata[0][i];
      this.total += element.price * this.cartdata[1][i];
    }
    if (this.total > 0) {
      this.notempty = true;
    }
  }
  onSubmit() {
    alert('Done.');
  }


}
