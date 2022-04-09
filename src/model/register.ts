export class Register {
    userName: String
    password: String
    passwordConfirm: String
  
    constructor(userName: String,
                password: String, passwordConfirm: String) {
      this.userName = userName;
      this.password = password;
      this.passwordConfirm = passwordConfirm;
    }
  }