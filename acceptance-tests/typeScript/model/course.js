"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Course {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.modules = new Array();
    }
}
exports.Course = Course;
