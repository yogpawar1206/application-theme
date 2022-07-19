import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentOpenComponent} from '../dialog-content-open/dialog-content-open.component'
/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentOpenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
