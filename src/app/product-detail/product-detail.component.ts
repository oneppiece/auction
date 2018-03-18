import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  private product: Product;
  comments: Comment[];

  constructor(private routerInfo: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params['id'];
    this.product = this.productService.product(this.id);
    this.comments = this.productService.commentByProductId(this.id);
  }

}
