import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private productArrays = [
    new Product(1, '标题1', 10, 5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述1', ['电子产品', '消耗品', '保健品']),
    new Product(2, '标题2', 10, 3.5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述2', ['电子产品', '消耗品']),
    new Product(3, '标题3', 33, 2, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述3', ['电子产品', '消耗品']),
    new Product(4, '标题4', 12, 5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述4', ['电子产品', '消耗品', '易耗品']),
    new Product(5, '标题5', 33, 4.5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述5', ['电子产品', '消耗品', '易耗品']),
    new Product(6, '标题6', 44, 2.5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述6', ['电子产品', '消耗品', '易耗品']),
    new Product(7, '标题7', 32, 3.5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述7', ['电子产品', '消耗品', '易耗品']),
    new Product(8, '标题8', 23, 1, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述8', ['电子产品', '消耗品', '易耗品']),
    new Product(9, '标题9', 12, 5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述9', ['电子产品', '消耗品', '保健品']),
    new Product(10, '标题10', 12, 4, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述10', ['电子产品', '消耗品']),
    new Product(11, '标题11', 45, 3.5, '这是一个撒打算大的反攻倒算风格韩国建国饭店54描述11', ['电子产品', '消耗品', '易耗品']),
  ];

  private commentArrays = [
    new Comment(1, 1, '2018-8-8', '张三1', 2, '还不错'),
    new Comment(2, 1, '2018-8-8', '张三2', 1, '还不错'),
    new Comment(3, 1, '2018-8-8', '张三3', 3, '还不错'),
    new Comment(4, 2, '2018-8-8', '张三4', 4, '还不错'),
    new Comment(5, 2, '2018-8-8', '张三5', 5, '还不错'),
    new Comment(6, 3, '2018-8-8', '张三6', 4, '还不错'),
    new Comment(7, 7, '2018-8-8', '张三7', 6, '还不错'),
    new Comment(8, 8, '2018-8-8', '张三8', 1, '还不错'),
    new Comment(9, 4, '2018-8-8', '张三9', 3, '还不错'),
    new Comment(10, 3, '2018-8-8', '张三10', 4, '还不错'),
    new Comment(11, 2, '2018-8-8', '张三11', 3, '还不错'),
  ];

  constructor() {
  }

  products() {
    return this.productArrays;
  }

  product(id: number): Product {
    return this.productArrays.find((product) => product.id == id);
  }

  commentByProductId(id: number): Comment[] {
    return this.commentArrays.filter((comment: Comment) => comment.productId == id);
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


export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
