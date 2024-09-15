import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Student } from 'src/app/Modal/student';
import { DataSharingService } from 'src/app/Service/data-sharing.service';
import { StudentService } from 'src/app/Service/student.service';
import { MessagesService } from '../../Service/messages.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  studentArray: Student[] = [];
  Createform!: FormGroup;
  CreateSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>,
    private dataSharing: DataSharingService,
    private messagesService: MessagesService,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.Createform = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
  }

  get f() {
    return this.Createform.controls;
  }

  closeDialog(): void {
    //Close create component and hit will go in dashboard component
    this.dialogRef.close("I am going to dashboard");
    //or
    //this.dialogRef.close();
  }
  AddDetail() {
    this.CreateSubmitted = true;
    if (this.Createform.invalid) {
      return;
    }
    const student4 = new Student();
    student4.Id = this.studentService.getStudents().length + 1;
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
  
    this.success();
    //Close create component and hit will go in dashboard component
     this.dialogRef.close({status:true});
  }

  reset() {
    this.Createform.reset();
  }
   private success() {
    this.messagesService.openDialog(
      'Success',
      'Database updated as you wished!'
    );
  }
}
