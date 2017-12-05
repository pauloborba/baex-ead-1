import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-students-registering',
    templateUrl: './students-registering.component.html',
    styleUrls: ['./students-registering.component.css']
})
export class StudentsRegisteringComponent implements OnInit {

    student: Student = new Student();
    status: string;

    constructor(private studentService: StudentService) { }

    createStudent(s: Student): void {
        this.studentService.registerStudents(s).then(text => {
            if(text == "success"){
                this.student = new Student();
                this.status = "aluno cadastrado com sucesso";
            }else{
                this.status = "aluno não pode ser ser cadastrado";
            }
        }).catch(error => alert(error));
        setTimeout(() => this.status="", 3000);
    }

    ngOnInit() {
    }

}
