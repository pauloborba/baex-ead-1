export class Student {
  name: string;
  cpf: string;
  email: string;
  password: string; //plain text?
  inDay: Map<string, boolean>;
  courses: Array<string>;

  constructor(name: string, cpf: string, email: string, password: string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.password = password;
    this.inDay = new Map<string, boolean>();
    this.courses = new Array<string>();
  }
}
