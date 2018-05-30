import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fristpage',
  templateUrl: './fristpage.component.html',
  styleUrls: ['./fristpage.component.css']
})
export class FristpageComponent implements OnInit {
  public rows: any[];
  constructor() { }

  ngOnInit() {
    this.rows = [{
      projectCode: 32321312312,
      projectType: 'Mass',
      projectProgress: 0,
      projectFile: 'dsadassd',
      deadLine: '22/12/61',
      sale: 'Mr..... ......'
    }];
  }
}
