import { Router } from '@angular/router';
import { GdataService } from '../../services/gdata.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

  products: product[] = [];
  constructor(private data: GdataService, private router: Router) { }

  ngOnInit(): void {
    this.dontCareProducts();
    this.data.getdata().subscribe(x => { this.products = x; });
  }
  removeproduct(x: product) {
    this.data.removeLocaly = [(x.id)];
    this.dontCareProducts();
  }
  isproduct(x: number): boolean {
    return !this.data.removeLocaly.includes(x);
  }
  dontCareProducts() {
    this.data.removeLocaly.forEach(e => {
      this.products = this.products.filter(p => p.id !== e);
    });
    console.log(this.products);
  }


}
