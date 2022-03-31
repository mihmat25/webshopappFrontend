export class OrderDTO {

  id: String;
  user: String;
  userName: String;
  userAddress: String;
  totalCost: number;
  status: String;
  dateOfSubmission: String;
  orderLines: String;


  constructor(id: String, user: String, userName: String, userAddress: String, totalCost: number, status: String, dateOfSubmission: String, orderLines: String) {
    this.id = id;
    this.user = user;
    this.userName = userName;
    this.userAddress = userAddress;
    this.totalCost = totalCost;
    this.status = status;
    this.dateOfSubmission = dateOfSubmission;
    this.orderLines = orderLines;
  }
}
