import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogElementOpenComponent} from '../dialog-element-open/dialog-element-open.component'
/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog-elements-example.html',
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementOpenComponent);
  }
}
