export class Register {
    userName: String
    password: String
    passwordConfirm: String
    email: String
    address: String


  constructor(userName: String, password: String, passwordConfirm: String, email: String, address: String) {
    this.userName = userName;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.email = email;
    this.address = address;
  }
}
