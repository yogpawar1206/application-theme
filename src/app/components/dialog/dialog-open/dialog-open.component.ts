import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../dialog-animations/dialog-animations-example';

@Component({
  selector: 'app-dialog-open',
  templateUrl: './dialog-open.component.html',
  styleUrls: ['./dialog-open.component.scss']
})
export class DialogOpenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}

  ngOnInit(): void {
  }

}
