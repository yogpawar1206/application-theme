import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData ,DialogOverviewExample} from '../dialog-overview/dialog-overview-example';

@Component({
  selector: 'app-dialog-overview-open',
  templateUrl: './dialog-overview-open.component.html',
  styleUrls: ['./dialog-overview-open.component.scss']
})
export class DialogOverviewOpenComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExample>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
