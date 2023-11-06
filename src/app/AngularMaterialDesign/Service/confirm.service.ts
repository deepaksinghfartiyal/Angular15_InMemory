import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../MaterialComponent/confirm/confirm.component';
import { Observable, map } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class ConfirmService {
  
  private dialogRef!: MatDialogRef<ConfirmComponent>;

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<any> {
    debugger;
    this.dialogRef = this.dialog.open(ConfirmComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message; 
    return this.dialogRef.afterClosed().pipe(
      map(result => !!result) // Convert result to boolean
    );
  }
}
