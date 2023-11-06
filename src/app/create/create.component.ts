import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../Modal/student';
import { StudentService } from '../Service/student.service';
import { DataSharingService } from '../Service/data-sharing.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  studentArray:Student[]=[];

  student!:Student;
  //or
  // Createform: FormGroup = new FormGroup({
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   gender: new FormControl(''),
  //   address: new FormControl(''),
  //   city: new FormControl(''),
  //   state: new FormControl(''),
  //   country: new FormControl(''),
  //   email: new FormControl(''),
  //   phone_number: new FormControl(''),
  // });

  //Define Createform as property of the component

  Createform!:FormGroup
  CreateSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataSharing: DataSharingService,
    private router: Router,
    private studentService: StudentService // Inject StudentService here
  ) {}
  
  ngOnInit(): void {
    this.Createform = this.formBuilder.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        gender: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        email: ['', Validators.required],
        phone_number: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Createform.controls;
  }

  AddDetail() { 
    debugger;
    this.CreateSubmitted = true;
    if (this.Createform.invalid) {
      return;
    }
    const student4 = new Student();
    student4.Id = this.studentService.getStudents().length+1;
    student4.first_name = this.Createform.value.first_name;
    student4.last_name = this.Createform.value.last_name;
    student4.gender = this.Createform.value.gender;
    student4.address = this.Createform.value.address;
    student4.city = this.Createform.value.city;
    student4.state = this.Createform.value.state;
    student4.country = this.Createform.value.country;
    student4.email = this.Createform.value.email;
    student4.phone_number = this.Createform.value.phone_number;

    this.studentService.getStudents().push(student4); 

    this.dataSharing.getAllStudent = this.studentService.getStudents();
    this.router.navigate(['/dashboard']);
  }
}
