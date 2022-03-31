import {OrderDTO} from "./orderDTO";

export class UserDTO {

  id: String;
  userName: String;
  email: String;
  address: String;
  currentOrder: OrderDTO;
  orders: OrderDTO[];


  constructor(id: String, userName: String, email: String, address: String, currentOrder: OrderDTO, orders: OrderDTO[]) {
    this.id = id;
    this.userName = userName;
    this.email = email;
    this.address = address;
    this.currentOrder = currentOrder;
    this.orders = orders;
  }
}
