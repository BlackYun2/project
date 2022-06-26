import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { TocartService } from '../services/tocart.service';
import { Router } from '@angular/router';

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
  constructor(private itemdata: TocartService, private router: Router) { }

  ngOnInit(): void {
    this.cartdata = this.itemdata.data;
    this.calcualteamount();
  }
  calcualteamount() {
    this.total = 0;
    for (let i = 0; i < this.cartdata[0].length; i++) {
      const element = this.cartdata[0][i];
      this.total += element.price * this.cartdata[1][i];
    }
    if (this.total > 0) {
      this.notempty = true;
    }
    else
      this.notempty = false;
    this.total = Number(this.total.toFixed(2));
  }
  updateamount(x: product, t: string) {
    let temp = Number(t);
    this.total = 0;
    for (let i = 0; i < this.cartdata[0].length; i++) {
      const element = this.cartdata[0][i];
      if (x.id === element.id)
        this.cartdata[1][i] = temp;
      this.total += element.price * this.cartdata[1][i];
    }
    this.total = Number(this.total.toFixed(2));

  }
  remove(x: product) {
    for (let i = 0; i < this.cartdata[0].length; i++) {
      const element = this.cartdata[0][i];
      if (x.id === element.id) {

        this.cartdata[0].splice(i, 1);
        this.cartdata[1].splice(i, 1);
      }
    }
    this.calcualteamount();
    alert('item (' + x.name + ') removed successfully');
  }
  onSubmit() {

    
    this.router.navigate(['/confirm']);
  }


}
