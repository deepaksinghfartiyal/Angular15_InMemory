import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentService } from '../Service/student.service';
import { DataSharingService } from '../Service/data-sharing.service';
import { Student } from '../Modal/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stu:Student|undefined;
  students:Student[]=[];

  selectedSortOption: string = 'gender';
  ascending: boolean = true;

  currentPage: number = 1; // Current page number
  pageSize: number = 3; // Number of items per page
  pages: number[] = [];

  
  onPageSizeChange() {
    //you're binding pageSize using ngModel, which by default works with strings. If you want to ensure that pageSize is always treated as a number, you can explicitly convert it to a number in your onPageSizeChange method.
    debugger;
    this.currentPage=1
    this.pageSize=this.pageSize;
    console.log("-----------------"+this.pageSize)
    this.pageSize = Number(this.pageSize);
    this.pages = this.generatePageArray(); // Update the pages based on the new page size
  }

  constructor(public dialog: MatDialog,private router: Router,private studentService: StudentService,private dataSharing:DataSharingService) {}

  ngOnInit() {
    debugger;
    this.setSortColumn(this.selectedSortOption);
    this.students = this.studentService.getStudents();
    this.pages = this.generatePageArray(); // Assign the result to a property named 'pages'
  }

  openDeleteConfirmationDialog(id:number)
  {
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed)
    {
         // Delete logic here
         this.stu = this.studentService.findStudentById(id);
         if (this.stu) {
           const index = this.students.findIndex(s=>s.Id===this.stu?.Id);
           console.log('this.stu:', this.stu);
           console.log('this.studentArray:', this.students);
           console.log('Index:', index);
           if (index !== -1) {
             this.students.splice(index, 1); // Remove the student from the array
           }
           console.log(this.students);
           this.pages = this.generatePageArray();
       }
    }
  }
  editDetail(id:number)
  {
    debugger;
    if(id>0)
    {
      this.stu = this.studentService.findStudentById(id);
      if(this.stu)
      {
        //Approach First:-
       // this.router.navigate(['/Edit',this.stu]);
       //drawback:It will pass student data as a queary string and loss of data security

       //Second Approach :data sharing between component without using queary string
       this.dataSharing.selectedStudent=this.stu;
       this.router.navigate(['/Edit']);
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

  sortStudents()
  {
    debugger;
    this.setSortColumn(this.selectedSortOption);
  }

  setSortColumn(columnName:string)
  {
    this.ascending=!this.ascending;
    this.studentService.sortStudentsBy(columnName,this.ascending);
  }
  // Function to get the current page of students
  //Create property
get pagedStudents(): any[] {
  debugger;
  let startIndex = (this.currentPage - 1) * this.pageSize;
  let endIndex=startIndex + this.pageSize;
  if(this.students.slice(startIndex,endIndex).length===0)
  {
    debugger;
    this.currentPage=this.currentPage-1;
    startIndex = (this.currentPage - 1) * this.pageSize;
    endIndex=startIndex + this.pageSize;
    return this.students.slice(startIndex,endIndex);
  }
  return this.students.slice(startIndex,endIndex);
  //page no 1=(0,3)   0,1,2
  //page no 2=(3,6)   3,4,5
  //page no 3=(6,9)   6,7,8
  //page no 4=(9,12)  9,10,11
}

// Add a new method to generate the page array
generatePageArray(): number[] {
  const pageCount = Math.ceil(this.students.length / this.pageSize);
  return Array.from({ length: pageCount }, (_, i) => i + 1);
}

// Function to handle page change
onPageChange(newPage: number) {
  debugger; 
  if (newPage >= 1 && newPage <= this.pages.length) {
    this.currentPage = newPage;
  }
}
}
