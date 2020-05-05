import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  displayImage = false;
  private _listFilter = '';
  filteredProducts: IProduct[];
  errorMessage: string;

  constructor(private productService: ProductService) {
    this.listFilter = '';
  }

  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  products: IProduct[];

  performFilter(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter(
      (p: IProduct) => p.productName.toLocaleLowerCase().indexOf(value) !== -1
    );
  }

  onRatingUpdated(message: string) {
    this.pageTitle = this.pageTitle + ' ' + message;
  }

  toggleImage() {
    this.displayImage = !this.displayImage;
  }

  ngOnInit(): void {
    console.log('In Oninit');
    this.productService.getProducts()
      .subscribe({
        next: productsData => {
          this.products = productsData;
          this.filteredProducts = this.products;
        },
        error: someError => this.errorMessage = someError,
      }
      );
  }
}
