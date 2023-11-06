import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Modal/student';
import { DataSharingService } from 'src/app/Service/data-sharing.service';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  stu: Student | undefined;
  UpdateSubmitted = false;
  Updateform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharing: DataSharingService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    id = Number(id);
    this.GetEditRecordsByUsing_Id(id);

    this.Updateform = this.formBuilder.group({
      Id: ['', Validators.required],
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

  GetEditRecordsByUsing_Id(id: number) {
    debugger;
    if (id > 0) {
      const data = this.studentService.findStudentById(id);
      if (data) {
        this.stu = data;
      } else {
        console.log("Student with Id " + id + " not found");
      }
    } else if (id === 0) {
      console.log("Id is 0")
    } else {
      console.log('Invalid id ' + id + " It must be postive no")
    }
  }

  get f() {
    return this.Updateform.controls;
  }

  UpdateDetail()
  {
   debugger;
   this.UpdateSubmitted = true;
   if (this.Updateform.invalid) {
     return;
   } 
   console.log(this.Updateform.value);
   this.stu=this.Updateform.value;
   if(this.stu)
   {
     const status:boolean= this.studentService.updateStudentById(this.stu);
     if(status)
     {
       this.router.navigate(['/dashboard']);
     }
   }
   this.stu= this.studentService.findStudentById(this.Updateform.value.Id);
  }
}
