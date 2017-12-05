import { Module } from './module'

export class Course {
  name: string;
  price: number;
  description: string;
  modules: Array<Module>

  constructor(name?: string, price?: number, description?: string) {
    this.name = name || "";
    this.price = price || 0;
    this.description = description || "";
    this.modules = new Array<Module>();
  }
}
