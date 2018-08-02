import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../shared/service/project.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { TablenumemployeeComponent } from '../tablenumemployee/tablenumemployee.component';

@Component({
  selector: 'app-fristpage',
  templateUrl: './fristpage.component.html',
  styleUrls: ['./fristpage.component.css']
})
export class FristpageComponent implements OnInit {
  public rows: any[];
  public product = [];
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.projectService.getIdProjectFromPM(id).subscribe((results) => {
      console.log(results)
      this.rows = results;
      this.getProduct();
    });
  }
  getProduct() {
    this.rows.forEach(element => {
      this.product.push(Object.keys(element.projectFile[0]));
    });
  }
  searchManagerWork() {
    const dialogRef = this.dialog.open(TablenumemployeeComponent, {
      width: '1000px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }
}
