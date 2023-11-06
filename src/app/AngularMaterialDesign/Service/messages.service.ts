import { Injectable } from '@angular/core';
import { MessagesComponent } from '../MaterialComponent/messages/messages.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root' //this indicates that the service is provided globally.
// })

// I am adding MessagesService scope with in the MaterialDesignModule module

@Injectable()

export class MessagesService {

  dialogRef!: MatDialogRef<MessagesComponent>;

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string): Observable<any> {
    
    this.dialogRef = this.dialog.open(MessagesComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();
    // Nothing can live after afterClosed.
  }
}
