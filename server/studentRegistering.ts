import { Student } from '../gui/src/app/student';

export class StudentRegistering {
    students: Student[] = [];

    constructor(){}

    duplicatedEmail(e: string): boolean{
        for(var i = 0; i < this.students.length; i++){
            if(this.students[i].email == e){
                return true;
            }
        }
        return false;
    }

    register(s: Student): Student{
        if(!this.duplicatedEmail(s.email)) {
            this.students.push(s);
            return s;
        }
        return null;
    }

    getStudents(): Student[]{
        return this.students;
    }
}
