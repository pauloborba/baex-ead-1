import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

    students: Student[] = [];


    constructor(private studentService: StudentService) { }

    getStudents(): void{
        this.studentService.getStudents().then(studentsList =>
            this.students = studentsList
        ).catch(error => alert(error));
    }

    ngOnInit() {
        this.getStudents();
    }

}
