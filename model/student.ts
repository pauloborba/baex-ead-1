export class Student {
  name: string;
  cpf: string;
  email: string;
  password: string; //plain text?
  inDay: Map<string, boolean>;
  classes: Array<string>;

  constructor(name: string, cpf: string, email: string, password: string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
    this.inDay = new Map<string, boolean>();
    this.classes = new Array<string>();
  }
}
