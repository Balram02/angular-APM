import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle = 'Product Details';
  product: IProduct;

  constructor(private service: ProductService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(id).subscribe({
      next: data => this.product = data
    }
    );
  }

  onBackPressed(): void {
    this.location.back();
  }
}
