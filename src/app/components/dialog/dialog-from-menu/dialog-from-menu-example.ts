import {Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import {DialogfromMenuOpenComponent} from '../dialogfrom-menu-open/dialogfrom-menu-open.component'
/**
 * @title Dialog launched from a menu
 */
@Component({
  selector: 'dialog-from-menu-example',
  templateUrl: 'dialog-from-menu-example.html',
})
export class DialogFromMenuExample {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    // #docregion focus-restoration
    const dialogRef = this.dialog.open(DialogfromMenuOpenComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe((data:any) =>{
      this.menuTrigger.focus();
      console.log("close",data)
    } );
    // #enddocregion focus-restoration
  }
// close(){
// this.dialog.close()
// }
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog {}
