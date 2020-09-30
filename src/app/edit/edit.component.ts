import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  sub: Subscription;

  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.product = this.productService.getProductById(id);
    });
  }

  updateProduct(id: number, product: IProduct): void {
    this.productService.editProduct(id, product);
  }
}
