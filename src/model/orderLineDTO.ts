import {Product} from "./product";
import {OrderDTO} from "./orderDTO";

export class OrderLineDTO {

id: String;
order: OrderDTO;
product: Product;
numberOfProducts: number;
productPrice: number;


  constructor(id: String, order: OrderDTO, product: ProductDTO, numberOfProducts: number, productPrice: number) {
    this.id = id;
    this.order = order;
    this.product = product;
    this.numberOfProducts = numberOfProducts;
    this.productPrice = productPrice;
  }
}
