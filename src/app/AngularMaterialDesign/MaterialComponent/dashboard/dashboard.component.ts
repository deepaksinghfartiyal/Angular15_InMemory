import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/Modal/student';
import { StudentService } from 'src/app/Service/student.service';
import { MessagesService } from '../../Service/messages.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmService } from '../../Service/confirm.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Set the change detection strategy here
})
export class DashboardComponent {

  stu:Student|undefined;
  studentsData: Student[] = [];
  displayedColumns: string[] = ['first_name', 'last_name', 'gender', 'address', 'city', 'state', 'country', 'email', 'phone_number','actions'];
  paginator:number=3;
  
   matTableStudentsDataSource = new MatTableDataSource<Student>();

  constructor(private studentService: StudentService, 
    public dialogRef: MatDialogRef<CreateComponent>,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private messagesService: MessagesService,
    private confirmService: ConfirmService,) 
    {}

  ngOnInit()
  {
    this.studentsData = this.studentService.getStudents();
    // Initialize MatTableDataSource
    this.matTableStudentsDataSource.data = this.studentsData; 
  }
  public deleteRecord(recordId:number){
    debugger;
    const dsData = this.studentService.getStudents();
    const name1 = 'first_name';
    const name2 = 'last_name';
    const record = this.studentService.findStudentById(recordId);
    let name="Are you sure want to delete the record?";
    const url = recordId;
    this.confirmService.confirm(name, 'This action is final. Gone forever!')
    .subscribe(confirmed => {
    debugger;
    if (confirmed) {
      console.log('User confirmed. Deleting record.');
      this.stu = this.studentService.findStudentById(recordId);
      if (this.stu) {
        const index = this.studentsData.findIndex(s => s.Id === this.stu?.Id);
        console.log('this.stu:', this.stu);
        console.log('this.studentArray:', this.studentsData);
        console.log('Index:', index);
        if (index !== -1) {
          // Remove the student from the array
          this.studentsData.splice(index, 1); 
         // Initialize MatTableDataSource
         this.matTableStudentsDataSource.data = this.studentsData; 
         this.success();
        }
      }
    } else {
      console.log('User cancelled. Not deleting record.');
    }
  });
  }
 
  public editRecord(recordId:number) {
    // this.dialog.open(this.editMemberComponent, {
    //   data: {recordId: recordId, idColumn: this.idColumn, paginator: this.paginator, dataSource: this.dataSource}
    // });
  }
  public addRecord()
  {
    //Open CreateComponent
    const dialogRef = this.dialog.open(CreateComponent);

    //Close CreateComponent
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log('The dialog was closed:-'+result);
      if(result?.status==true)
        this.matTableStudentsDataSource.data = this.studentService.getStudents();
    });
  }
  
  private success() {
    this.messagesService.openDialog(
      'Success',
      'Database updated as you wished!'
    );
  }
}