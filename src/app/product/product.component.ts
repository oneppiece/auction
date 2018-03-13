import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '标题1', 10, 5, '描述1', ['电子产品', '消耗品', '保健品']),
      new Product(2, '标题2', 10, 3, '描述2', ['电子产品', '消耗品']),
      new Product(3, '标题3', 33, 2, '描述3', ['电子产品', '消耗品']),
      new Product(4, '标题4', 12, 5, '描述4', ['电子产品', '消耗品', '易耗品']),
      new Product(5, '标题5', 33, 5, '描述5', ['电子产品', '消耗品', '易耗品']),
      new Product(6, '标题6', 44, 2, '描述6', ['电子产品', '消耗品', '易耗品']),
      new Product(7, '标题7', 32, 3, '描述7', ['电子产品', '消耗品', '易耗品']),
      new Product(8, '标题8', 23, 1, '描述8', ['电子产品', '消耗品', '易耗品']),
      new Product(9, '标题9', 12, 5, '描述9', ['电子产品', '消耗品', '保健品']),
      new Product(10, '标题10', 12, 4, '描述10', ['电子产品', '消耗品']),
      new Product(11, '标题11', 45, 3, '描述11', ['电子产品', '消耗品', '易耗品']),
    ];
  }

}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
