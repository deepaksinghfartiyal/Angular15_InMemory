export class Student {
    Id!: number; 
    first_name!: string; 
    last_name!: string; 
    gender!: string;
    address!: string;
    city!: string;
    state!: string;
    country!: string;
    email!: string;
    phone_number!: string;

    // private constructor()
    // {
    //   this.StudentArray();
    // }
  //   students: Student[] = []; // Declare students as a class property
  //   private static instance: Student;
  //  StudentArray()
  //   {
  //   const student1 = new Student();
  //   student1.Id = 1;
  //   student1.first_name = 'John';
  //   student1.last_name = 'Doe';
  //   student1.gender = 'Male';
  //   student1.address = '123 Main St';
  //   student1.city = 'Anytown';
  //   student1.state = 'CA';
  //   student1.country = 'USA';
  //   student1.email = 'john.doe@example.com';
  //   student1.phone_number = '123-456-7890';
  //   this.students.push(student1);
    
  //   const student2 = new Student();
  //   student2.Id = 2;
  //   student2.first_name = 'Jane';
  //   student2.last_name = 'Smith';
  //   student2.gender = 'Female';
  //   student2.address = '456 Elm St';
  //   student2.city = 'Otherville';
  //   student2.state = 'NY';
  //   student2.country = 'USA';
  //   student2.email = 'jane.smith@example.com';
  //   student2.phone_number = '987-654-3210';
  //   this.students.push(student2);
    
  //   const student3 = new Student();
  //   student3.Id = 3;
  //   student3.first_name = 'Michael';
  //   student3.last_name = 'Johnson';
  //   student3.gender = 'Male';
  //   student3.address = '789 Oak St';
  //   student3.city = 'Anothercity';
  //   student3.state = 'TX';
  //   student3.country = 'USA';
  //   student3.email = 'michael.johnson@example.com';
  //   student3.phone_number = '555-123-4567';
  //   this.students.push(student3);
  //   //checks whether the variable students values are null, undefined, false, 0, NaN,
  //     // and an empty string ("") and return true and false

  //     //logical ! operator
  //     if (!this.students || this.students.length === 0) { //
  //       return []; 
  //    }
  //    return this.students  
  //   }

  //   public static getInstance(): Student {
  //     if (!Student.instance) {
  //         Student.instance = new Student();
  //     }
  //     return Student.instance;
  // }
}
