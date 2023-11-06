import { Injectable } from '@angular/core';
import { Student } from '../Modal/student';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  selectedStudent: Student|undefined //=new Student();
  getAllStudent:Student[]=[];
  constructor() { }
}
