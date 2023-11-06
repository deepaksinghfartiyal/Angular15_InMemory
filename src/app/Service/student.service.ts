import { Injectable } from '@angular/core';
import { Student } from '../Modal/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  constructor() {
  console.log("First object of StudentService is created");
  this.initializeStudentArray();
 }
 private initializeStudentArray(){
  const student1 = new Student();
  student1.Id = 1;
  student1.first_name = 'John';
  student1.last_name = 'Doe';
  student1.gender = 'Male';
  student1.address = '123 Main St';
  student1.city = 'Anytown';
  student1.state = 'CA';
  student1.country = 'India';
  student1.email = 'john.doe@example.com';
  student1.phone_number = '123-456-7890';

  this.students.push(student1);
  
  const student2 = new Student();
  student2.Id = 2;
  student2.first_name = 'Jane';
  student2.last_name = 'Smith';
  student2.gender = 'Female';
  student2.address = '456 Elm St';
  student2.city = 'Otherville';
  student2.state = 'NY';
  student2.country = 'Pakistan';
  student2.email = 'jane.smith@example.com';
  student2.phone_number = '987-654-3210';

  this.students.push(student2);
  
  const student3 = new Student();
  student3.Id = 3;
  student3.first_name = 'Michael';
  student3.last_name = 'Johnson';
  student3.gender = 'Male';
  student3.address = '789 Oak St';
  student3.city = 'Anothercity';
  student3.state = 'TX';
  student3.country = 'USA';
  student3.email = 'michael.johnson@example.com';
  student3.phone_number = '555-123-4567';

  this.students.push(student3);

  const student4 = new Student();
student4.Id = 4;
student4.first_name = 'Sarah';
student4.last_name = 'Brown';
student4.gender = 'Female';
student4.address = '567 Pine St';
student4.city = 'Townsville';
student4.state = 'FL';
student4.country = 'Canada';
student4.email = 'sarah.brown@example.com';
student4.phone_number = '111-222-3333';

this.students.push(student4);

const student5 = new Student();
student5.Id = 5;
student5.first_name = 'Robert';
student5.last_name = 'Wilson';
student5.gender = 'Male';
student5.address = '678 Cedar St';
student5.city = 'Villageville';
student5.state = 'AZ';
student5.country = 'UK';
student5.email = 'robert.wilson@example.com';
student5.phone_number = '777-888-9999';

this.students.push(student5);

const student6 = new Student();
student6.Id = 6;
student6.first_name = 'Emily';
student6.last_name = 'Davis';
student6.gender = 'Female';
student6.address = '890 Birch St';
student6.city = 'Countryville';
student6.state = 'GA';
student6.country = 'Australia';
student6.email = 'emily.davis@example.com';
student6.phone_number = '444-555-6666';

this.students.push(student6);

const student7 = new Student();
student7.Id = 7;
student7.first_name = 'Daniel';
student7.last_name = 'Martinez';
student7.gender = 'Male';
student7.address = '234 Willow St';
student7.city = 'Citytown';
student7.state = 'NJ';
student7.country = 'Germany';
student7.email = 'daniel.martinez@example.com';
student7.phone_number = '222-333-4444';

this.students.push(student7);

const student8 = new Student();
student8.Id = 8;
student8.first_name = 'Olivia';
student8.last_name = 'Garcia';
student8.gender = 'Female';
student8.address = '123 Elm St';
student8.city = 'Villagetown';
student8.state = 'WA';
student8.country = 'France';
student8.email = 'olivia.garcia@example.com';
student8.phone_number = '888-999-0000';

this.students.push(student8);

const student9 = new Student();
student9.Id = 9;
student9.first_name = 'William';
student9.last_name = 'Lopez';
student9.gender = 'Male';
student9.address = '345 Oak St';
student9.city = 'Townsville';
student9.state = 'NY';
student9.country = 'Italy';
student9.email = 'william.lopez@example.com';
student9.phone_number = '333-444-5555';

this.students.push(student9);

const student10 = new Student();
student10.Id = 10;
student10.first_name = 'Ava';
student10.last_name = 'Rodriguez';
student10.gender = 'Female';
student10.address = '456 Pine St';
student10.city = 'Villageville';
student10.state = 'CA';
student10.country = 'Spain';
student10.email = 'ava.rodriguez@example.com';
student10.phone_number = '333-444-5555';

this.students.push(student10);

  //checks whether the variable students values are null, undefined, false, 0, NaN,
    // and an empty string ("") and return true and false

    //logical ! operator
    if (!this.students || this.students.length === 0) { //
      return []; 
   }
   return this.students; 
 }
 
 //The ? after newStudent indicates that it's an optional parameter. You can call this method without passing any argument, and in that case, it will simply return the current list of students stored in the students array within the StudentService instance.
 getStudents(newStudent?: Student): Student[] {
  try{
    if (newStudent) {
      this.students.push(newStudent);
    }
    return this.students;
  }
  catch(error){
    console.error('An error occurred while fetching students:', error);
    return [];
   }
}

findStudentById(id: number): Student | undefined {
 const student= this.getStudents().find(s => s.Id === id);
  return student; 
}

updateStudentById(updateStudentData:Student):boolean
{
  if(updateStudentData.Id>0)
  {
    const id=updateStudentData.Id;
     const st=  this.findStudentById(id);
     // Check if st is defined before updating its properties
     if(st)
     {
      st.first_name=updateStudentData.first_name;
      st.last_name=updateStudentData.last_name;
      st.address=updateStudentData.address;
      st.city=updateStudentData.city;
      st.country=updateStudentData.country;
      st.gender=updateStudentData.gender;
      st.phone_number=updateStudentData.phone_number;
      st.state=updateStudentData.state;
      st.email=updateStudentData.email;
      return true;
     }
     else{
      return false;
     }
  }
return false;
}
sortStudentsBy(columnName: string, ascending: boolean): any {
  this.students.sort((a, b) => {
    const valueA = (a as any)[columnName].toLowerCase(); // Type assertion to any
    const valueB = (b as any)[columnName].toLowerCase();
    if (ascending) {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
}

}
