import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/service/test.service';
import { MatDialog } from '@angular/material';
import { TestDialogComponent } from './test-dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public rows = [];
  constructor(
    private dialog: MatDialog,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getAllTest().subscribe(result => {
      this.rows = result;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '750px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.testService.addTest(result)
          .mergeMap(() => this.testService.getAllTest())
          .subscribe((results) => {
            this.rows = results;
          });
      }
    });
  }



}
