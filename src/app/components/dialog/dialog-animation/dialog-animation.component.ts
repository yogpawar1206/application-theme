import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogOpenComponent} from '../dialog-open/dialog-open.component'

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-animation.component.html',
  styleUrls: ['./dialog-animation.component.scss']
})
export class DialogAnimationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogOpenComponent, {
      width: '250px',
      
    });
  }
}


