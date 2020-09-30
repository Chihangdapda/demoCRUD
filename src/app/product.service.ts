import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct: Array<IProduct> = [
    {
      id: 1, name: 'samsung', description: 's1'
    }, {
      id: 2, name: 'samsung2', description: 's2'
    }, {
      id: 3, name: 'samsung4', description: 's3'
    }, {
      id: 4, name: 'samsung4', description: 's4'
    },
  ];

  constructor() {
  }

  getProduct(): Array<IProduct>{
    return this.listProduct;
  }

  getProductById(id: number): IProduct{
    // @ts-ignore
    return this.listProduct.find(item => item.id === id);
  }

  editProduct(id: number, product: IProduct): void{
    let productItem = this.getProductById(id);
    productItem = product;
  }
}
