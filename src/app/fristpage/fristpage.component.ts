import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../shared/service/project.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
  ) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe((results) => {
      this.rows = results;
      this.getProduct();
    });
  }

  getProduct() {
    this.rows.forEach(element => {
      this.product.push(element.projectFile);
    });
    console.log(this.product[0][0])
  }

}
