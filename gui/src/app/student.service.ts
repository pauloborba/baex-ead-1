import { Injectable } from '@angular/core';
import { Student } from './student';
import 'rxjs/add/operator/toPromise';
import { Http, Headers} from '@angular/http';

@Injectable()
export class StudentService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private serverURL = 'http://localhost:3000';

    constructor(private http: Http) { }

    getStudents(): Promise <Student[]> {
        return this.http.get(this.serverURL + '/student')
            .toPromise()
            .then(res => res.json() as Student [])
            .catch();

    }

    registerStudents(s: Student): Promise<string> {
        return this.http.post(this.serverURL + '/student',JSON.stringify(s),{headers: this.headers})
            .toPromise()
            .then(res => {
                return res.text();
            }).catch();
    }
}
