import { Module } from './module'
import { Student } from './student'

export class Course {
  name: string;
  price: number;
  description: string;
  purchaseRequest: Array<Student>;
  modules: Array<Module>

  constructor(name: string, price: number, description: string) {
     this.name = name;
     this.price = price;
     this.description = description;
     this.modules = new Array<Module>();
     this.purchaseRequest = new Array<Student>();
  }
}
