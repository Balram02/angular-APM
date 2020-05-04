import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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

  constructor() {
    this.filteredProducts = this.products;
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

  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];

  performFilter(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter(
      (p: IProduct) => p.productName.toLocaleLowerCase().indexOf(value) !== -1
    );
  }

  toggleImage() {
    this.displayImage = !this.displayImage;
  }

  ngOnInit(): void {
    console.log('In Oninit');
  }
}
