export class Class {
  name: string;
  courseName: string;
  beginDate: Date;
  endDate: Date;

  constructor(name: string, courseName: string, beginDate: Date, endDate: Date) {
     this.name = name;
     this.courseName = courseName;
     this.beginDate = beginDate;
     this.endDate = endDate;
   }
}
