"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, cpf, email, password) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
        this.inDay = new Map();
        this.courses = new Array();
    }
}
exports.Student = Student;
