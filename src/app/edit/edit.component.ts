import { Component } from '@angular/core';
import { DataSharingService } from '../Service/data-sharing.service';
import { Student } from '../Modal/student';
import { StudentService } from '../Service/student.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
studentArray:Student[]=[];
// Initialize stu as an empty object or with default values
stu:Student |undefined //= new Student();
UpdateSubmitted = false;
Updateform!:FormGroup

constructor(private formBuilder: FormBuilder,private router:Router,private activatedRoute:ActivatedRoute, private dataSharing:DataSharingService, private studentService :StudentService){} 

 ngOnInit()
 {
  debugger;
  //Get edit detail by Id
  let id = this.activatedRoute.snapshot.params['id'];
  id= Number(id);
  this.GetEditRecordsByUsing_Id(id);

  // or Get edit detail by using data sharing service

    //this.GetEditRecordsByUsing_Service();

  this.Updateform = this.formBuilder.group(
    {
      Id:['',Validators.required],
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
 GetEditRecordsByUsing_Id(id:number)
{
  debugger;
  if(id>0)
  {
    const data= this.studentService.findStudentById(id);
    if(data)
    {
       this.stu=data;
    }
    else{
      console.log("Student with Id "+id+" not found");
    }
    }
    else if(id===0)
    {
      console.log("Id is 0")
    }
    else{
      console.log('Invalid id '+id+" It must be postive no")
    }
}
GetEditRecordsByUsing_Service()
 {
  this.stu=this.dataSharing.selectedStudent;
  console.log(this.stu);
  return this.stu;
 }

 get f(): { [key: string]: AbstractControl } {
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
